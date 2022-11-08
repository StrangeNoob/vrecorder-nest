import { Module } from '@nestjs/common';
import { AudiowaveController } from './audiowave.controller';
import { AudiowaveService } from './audiowave.service';

@Module({
  controllers: [AudiowaveController],
  providers: [AudiowaveService],
})
export class AudiowaveModule {}
