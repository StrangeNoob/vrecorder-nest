import { Test, TestingModule } from '@nestjs/testing';
import { AudiowaveController } from './audiowave.controller';

describe('AudiowaveController', () => {
  let controller: AudiowaveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AudiowaveController],
    }).compile();

    controller = module.get<AudiowaveController>(AudiowaveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
