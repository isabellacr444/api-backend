import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root', // Substitua pelo seu nome de usuário
  password: '1234', // Substitua pela sua senha
  database: 'todo-backend2',
  synchronize: false, // Não use 'true' em produção!
  logging: true,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/migrations/*.{js,ts}'],
  subscribers: [],
});