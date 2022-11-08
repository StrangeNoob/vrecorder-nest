import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AudiowaveService } from './audiowave.service';

@Controller('audiowave')
export class AudiowaveController {
  constructor(private readonly audiowaveService: AudiowaveService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async getWavePoints(@UploadedFile() file: Express.Multer.File) {
    return this.audiowaveService.getWavePoints(file);
  }
}
