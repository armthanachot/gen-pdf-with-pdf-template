import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoqModule } from './boq/boq.module';

@Module({
  imports: [BoqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
