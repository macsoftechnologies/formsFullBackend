import { Test, TestingModule } from '@nestjs/testing';
import { FormTypeService } from './form-type.service';

describe('FormTypeService', () => {
  let service: FormTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormTypeService],
    }).compile();

    service = module.get<FormTypeService>(FormTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
