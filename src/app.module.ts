import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AudiowaveModule } from './audiowave/audiowave.module';

@Module({
  imports: [AudiowaveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
