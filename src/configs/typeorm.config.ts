import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import config from 'config';

const dbConfig = config.get('db');

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'board-app',
    entities: [__dirname+'/../**/*.entity.{ts,js}'],
    synchronize: true
}