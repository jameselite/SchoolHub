import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UserRepository } from './users/users.repository';

@Module({
  imports: [],
  providers: [PrismaService, UsersService, UserRepository],
  controllers: [UsersController]
})

export class AppModule {}