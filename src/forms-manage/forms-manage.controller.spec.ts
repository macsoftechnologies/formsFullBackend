import { Test, TestingModule } from '@nestjs/testing';
import { FormsManageController } from './forms-manage.controller';

describe('FormsManageController', () => {
  let controller: FormsManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormsManageController],
    }).compile();

    controller = module.get<FormsManageController>(FormsManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
