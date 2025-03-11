import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { StudentsService } from './students.service';
import { StudentsRepository } from './students.repository';
import { StudentsController } from './students.controller';

@Module({
    providers: [ PrismaService, StudentsService, StudentsRepository ],
    controllers: [ StudentsController ]
})

export class StudentsModule {}