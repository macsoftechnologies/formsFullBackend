import { Test, TestingModule } from '@nestjs/testing';
import { CustomerAdminService } from './customer-admin.service';

describe('CustomerAdminService', () => {
  let service: CustomerAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerAdminService],
    }).compile();

    service = module.get<CustomerAdminService>(CustomerAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
