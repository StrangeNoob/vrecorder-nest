import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { promisify } from 'util';
import { resolve } from 'path';
import { writeFile, readFile } from 'fs/promises';

const execAsync = promisify(exec);

@Injectable()
export class AudiowaveService {
  async getWavePoints(file: Express.Multer.File) {
    const { buffer } = file;
    console.log(resolve(__dirname, '../../assets'));
    const fileName = Date.now();
    await writeFile(
      resolve(__dirname, '../../assets', `${fileName}.wav`),
      buffer,
    );
    await execAsync(
      `audiowaveform -i ${resolve(
        __dirname,
        '../../assets',
        `${fileName}.wav`,
      )} -o ${resolve(__dirname, '../../assets', `${fileName}.json`)} -z 2`,
    );
    const data = await readFile(
      resolve(__dirname, '../../assets', `${fileName}.json`),
      { encoding: 'utf-8' },
    );
    return JSON.parse(data);
  }
}
