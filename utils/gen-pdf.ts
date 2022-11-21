import { PDFDocument } from 'pdf-lib';
import * as fs from 'fs'
import { USERS } from 'constants/person';

/**
 * 
 * How To Generate PDF Template 
 * 1. create PDF in word and draw the shape
 * 2. save as PDF 
 * 3. go to pdfEscape
 * 4. choose online and choose saved pdf 
 * 5. in pdf escape editor select Form Field and draw Form Field cover target shape
 * 6. after Draw Form Field righ click and choose object propoties 
 * 7. fill the Text Field Name in Name Field 
 * 8. speciftc Max Length
 * 9. save and download
 */
const generatePdf = async () => {
    const buffer = fs.readFileSync('./pdf/Test_Pdf_Text_Field.pdf')
    const pdfDocs = await PDFDocument.load(buffer)
    const form = pdfDocs.getForm();
    form.getTextField('FirstName').setText('Thanachot')
    form.getTextField('LastName').setText('Tesjaroen')
    form.flatten();
    const pdfBytes = await pdfDocs.save();
    fs.writeFileSync('./pdf/pdf-generated.pdf', pdfBytes, 'binary')
}

const generatedMergedPdf = async()=>{
    const mergedPdf = await PDFDocument.create()
    for(const item of USERS){
        const buffer = fs.readFileSync('./pdf/pdf-template.pdf')
        const pdfDocs = await PDFDocument.load(buffer)
        const form = pdfDocs.getForm();
        form.getTextField('FirstName').setText(item.firstName)
        form.getTextField('LastName').setText(item.lastName)
        form.flatten();
        const pdfBytes = await pdfDocs.save();
        const filePath = `./public/${Date.now()}.pdf`
        fs.writeFileSync(filePath, pdfBytes, 'binary')

        const pdfFile = await PDFDocument.load(fs.readFileSync(filePath))
        const coppiedPages = await mergedPdf.copyPages(pdfFile, pdfFile.getPageIndices())
        coppiedPages.forEach((page) => mergedPdf.addPage(page))
    }

    const mergedPdfFile = await mergedPdf.save()
    const fileName = `${Date.now()}_merged.pdf`
    const merged_file_paht=`public/${fileName}`
    fs.writeFileSync(merged_file_paht, mergedPdfFile)
}

export {
    generatePdf,
    generatedMergedPdf
}