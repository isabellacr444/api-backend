import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/users.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UsersService],
  // ESTA LINHA É CRUCIAL.
  // Ela torna o UsersService "público" para que outros módulos
  // que importarem o UsersModule possam injetá-lo.
  exports: [UsersService],
})
export class UsersModule {}