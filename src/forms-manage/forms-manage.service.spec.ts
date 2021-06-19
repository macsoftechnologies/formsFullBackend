import { Test, TestingModule } from '@nestjs/testing';
import { FormsManageService } from './forms-manage.service';

describe('FormsManageService', () => {
  let service: FormsManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormsManageService],
    }).compile();

    service = module.get<FormsManageService>(FormsManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
