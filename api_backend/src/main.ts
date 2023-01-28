import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';

import { AppModule } from './app.module';

const start = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.use(
      cors(),
    );
    await app.listen(PORT, () => console.log(`server run on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
