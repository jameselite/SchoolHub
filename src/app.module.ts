import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { StudentsController } from './students/students.controller';
import { StudentsService } from './students/students.service';
import { StudentsModule } from './students/students.module';
import { StudentsRepository } from './students/students.repository';

@Module({
  imports: [StudentsModule],
  providers: [PrismaService, StudentsService, StudentsRepository],
  controllers: [StudentsController]
})

export class AppModule {}