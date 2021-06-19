import { Test, TestingModule } from '@nestjs/testing';
import { CustomerAdminController } from './customer-admin.controller';

describe('CustomerAdminController', () => {
  let controller: CustomerAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerAdminController],
    }).compile();

    controller = module.get<CustomerAdminController>(CustomerAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
