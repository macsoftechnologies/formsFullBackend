import { Test, TestingModule } from '@nestjs/testing';
import { GlobalValuesService } from './global-values.service';

describe('GlobalValuesService', () => {
  let service: GlobalValuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GlobalValuesService],
    }).compile();

    service = module.get<GlobalValuesService>(GlobalValuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
