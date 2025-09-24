// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module'; // <-- Importa seu módulo de tarefas

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // ou 127.0.0.1
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'todo-backend2',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // vai encontrar TaskEntity também
      synchronize: false, // mantenha false em produção, para usar migrations
    }),

    UsersModule,
    AuthModule,
    TasksModule,  // <-- adiciona aqui
  ],
  
})
export class AppModule {}
