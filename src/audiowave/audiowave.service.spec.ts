import { Test, TestingModule } from '@nestjs/testing';
import { AudiowaveService } from './audiowave.service';

describe('AudiowaveService', () => {
  let service: AudiowaveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AudiowaveService],
    }).compile();

    service = module.get<AudiowaveService>(AudiowaveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
