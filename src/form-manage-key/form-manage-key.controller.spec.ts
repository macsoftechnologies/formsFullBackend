import { Test, TestingModule } from '@nestjs/testing';
import { FormManageKeyController } from './form-manage-key.controller';

describe('FormManageKeyController', () => {
  let controller: FormManageKeyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormManageKeyController],
    }).compile();

    controller = module.get<FormManageKeyController>(FormManageKeyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
