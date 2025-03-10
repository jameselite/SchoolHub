import { HttpException, Injectable } from '@nestjs/common';
import { Students } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { InputStudent, OutputStudent } from './DTO/students.dto';
import * as bcrypt from "bcryptjs";

@Injectable()
export class StudentsRepository {
    constructor (private readonly prisma: PrismaService) {}

    async FindOnEmail(email: string): Promise<void> {
        if(!email) throw new HttpException("Email can not be empty.", 400);

        const student: Students | null = await this.prisma.students.findUnique({ where: { email: email }});
        if (student) throw new HttpException("Email is used.", 400);
    }

    async FindOnPhone(phone: string): Promise<void> {
        if(!phone) throw new HttpException("Phone can not be empty.", 400);

        const student: Students | null = await this.prisma.students.findUnique({ where: { phone: phone }});
        if (student) throw new HttpException("Phone is used.", 400);
    }

    async FindOnCode(code: string): Promise<void> {
        if(!code) throw new HttpException("Student code can not be empty.", 400);

        const student: Students | null = await this.prisma.students.findUnique({ where: { student_code: code }});
        if (student) throw new HttpException("Student code is used.", 400);
    }

    async CreateStudent(input: InputStudent): Promise<OutputStudent> {
        const hashedPassword: string = await bcrypt.hash(input.password, 10);
    
        const student = await this.prisma.students.create({
            data: {
                email: input.email,
                phone: input.phone,
                address: input.address,
                student_code: input.student_code,
                password: hashedPassword,
                degree: input.degree,
                fullname: input.fullname,
            },
        });
    
        return {
            email: student.email,
            phone: student.phone,
            address: student.address,
            student_code: student.student_code,
            degree: student.degree,
            fullname: student.fullname,
        };
    }
}