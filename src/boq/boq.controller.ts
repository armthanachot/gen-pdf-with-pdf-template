import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoqService } from './boq.service';
import { CreateBoqDto } from './dto/create-boq.dto';
import { UpdateBoqDto } from './dto/update-boq.dto';

@Controller('boq')
export class BoqController {
  constructor(private readonly boqService: BoqService) {}

  @Post()
  create(@Body() createBoqDto: CreateBoqDto) {
    return this.boqService.create(createBoqDto);
  }

  @Get()
  findAll() {
    return this.boqService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boqService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoqDto: UpdateBoqDto) {
    return this.boqService.update(+id, updateBoqDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boqService.remove(+id);
  }
}
