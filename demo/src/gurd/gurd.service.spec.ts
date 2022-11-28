import { Test, TestingModule } from '@nestjs/testing';
import { GurdService } from './gurd.service';

describe('GurdService', () => {
  let service: GurdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GurdService],
    }).compile();

    service = module.get<GurdService>(GurdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
