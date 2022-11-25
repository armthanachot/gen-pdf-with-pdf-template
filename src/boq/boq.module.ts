import { Module } from '@nestjs/common';
import { BoqService } from './boq.service';
import { BoqController } from './boq.controller';

@Module({
  controllers: [BoqController],
  providers: [BoqService]
})
export class BoqModule {}
