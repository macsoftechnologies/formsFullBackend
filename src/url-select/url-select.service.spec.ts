import { Test, TestingModule } from '@nestjs/testing';
import { UrlSelectService } from './url-select.service';

describe('UrlSelectService', () => {
  let service: UrlSelectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrlSelectService],
    }).compile();

    service = module.get<UrlSelectService>(UrlSelectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
