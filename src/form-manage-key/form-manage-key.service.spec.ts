import { Test, TestingModule } from '@nestjs/testing';
import { FormManageKeyService } from './form-manage-key.service';

describe('FormManageKeyService', () => {
  let service: FormManageKeyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormManageKeyService],
    }).compile();

    service = module.get<FormManageKeyService>(FormManageKeyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
