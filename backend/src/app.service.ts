import { Injectable } from "@nestjs/common";

/* Service - слой описывает бизнес-логику (работа с БД, обработка информации, вычисление и т.д.). Декоратор Injectable позволяет сервису быть использованным в качестве Provider'а, т.е. быть внедрённым в качестве зависимости */
@Injectable()
export class AppService {
  getUsers(): string {
    return 'GET USERS';
  }
}
