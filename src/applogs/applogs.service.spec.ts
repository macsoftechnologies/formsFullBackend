import { Test, TestingModule } from '@nestjs/testing';
import { ApplogsService } from './applogs.service';

describe('ApplogsService', () => {
  let service: ApplogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplogsService],
    }).compile();

    service = module.get<ApplogsService>(ApplogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
