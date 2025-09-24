// typeorm.config.ts
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',      // <-- Mude
  password: '1234',  // <-- Mude
  database: 'todo-backend2', // <-- Mude
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  migrationsRun: false,
});