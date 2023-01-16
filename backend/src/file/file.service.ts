import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

export enum FileType {
  AUDIO = 'audio',
  IMAGE = 'image',
}

@Injectable()
export class FileService {
  createFile(type: FileType, file): string {
    console.log('CreateFile')
    try {
      const fileExtension = file.originalname.split('.').pop();
      console.log(fileExtension)
      const fileName = `${uuid.v4()}.${fileExtension}`;
      const filePath = path.resolve(__dirname, '..', 'static', type);
      console.log({fileExtension, fileName, filePath})
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);
      return `${type}/${fileName}`;
    } catch (error) {
      console.log(error)
      throw new HttpException(error.messsage, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  removeFile() {}
}
