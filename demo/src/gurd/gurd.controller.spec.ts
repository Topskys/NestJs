import { Test, TestingModule } from '@nestjs/testing';
import { GurdController } from './gurd.controller';
import { GurdService } from './gurd.service';

describe('GurdController', () => {
  let controller: GurdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GurdController],
      providers: [GurdService],
    }).compile();

    controller = module.get<GurdController>(GurdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
