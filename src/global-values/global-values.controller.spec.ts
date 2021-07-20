import { Test, TestingModule } from '@nestjs/testing';
import { GlobalValuesController } from './global-values.controller';

describe('GlobalValuesController', () => {
  let controller: GlobalValuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GlobalValuesController],
    }).compile();

    controller = module.get<GlobalValuesController>(GlobalValuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
