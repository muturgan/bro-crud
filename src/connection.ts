import { createConnection, Connection } from 'typeorm';
import { config } from './config';
import * as Entities from './entities';

export const connectDB = (): Promise<Connection> => {
   return createConnection({
      type: config.DB_TYPE as any,
      host: config.DB_HOST,
      port: config.DB_PORT,
      database: config.DB_NAME,
      username: config.DB_USER,
      password: config.DB_PASS,
      entities: Object.values(Entities),
      synchronize: true,
   });
};