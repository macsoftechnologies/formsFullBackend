import { Test, TestingModule } from '@nestjs/testing';
import { UrlSelectController } from './url-select.controller';

describe('UrlSelectController', () => {
  let controller: UrlSelectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlSelectController],
    }).compile();

    controller = module.get<UrlSelectController>(UrlSelectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
