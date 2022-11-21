import { Controller, Get } from '@nestjs/common';
import { generatedMergedPdf, generatePdf } from 'utils/gen-pdf';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(){
    // await generatePdf()
    await generatedMergedPdf()
    return this.appService.getHello();
  }
}
