import { Injectable } from '@nestjs/common';
import { CreateBoqDto } from './dto/create-boq.dto';
import { UpdateBoqDto } from './dto/update-boq.dto';

@Injectable()
export class BoqService {
  create(createBoqDto: CreateBoqDto) {
    return 'This action adds a new boq';
  }

  findAll() {
    return `This action returns all boq`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boq`;
  }

  update(id: number, updateBoqDto: UpdateBoqDto) {
    return `This action updates a #${id} boq`;
  }

  remove(id: number) {
    return `This action removes a #${id} boq`;
  }
}