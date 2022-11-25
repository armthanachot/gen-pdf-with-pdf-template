import { Test, TestingModule } from '@nestjs/testing';
import { BoqService } from './boq.service';

describe('BoqService', () => {
  let service: BoqService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoqService],
    }).compile();

    service = module.get<BoqService>(BoqService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
