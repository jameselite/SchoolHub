import { HttpException, Injectable } from '@nestjs/common';
import { StudentsRepository } from './students.repository';
import { InputLoginStudent, InputRegisterStudent, OutputRegisterStudent } from './DTO/students.dto';
import { Students } from '@prisma/client';
import * as bcrypt from "bcryptjs";

@Injectable()
export class StudentsService {

    constructor(private readonly studentRepository: StudentsRepository) {}

    async CreateStudent(inputuser: InputRegisterStudent): Promise<OutputRegisterStudent> {

        const useremailcheck: Students | null = await this.studentRepository.FindOnEmail(inputuser.email);
        if(useremailcheck) throw new HttpException('Email is used.', 400);

        const userphonecheck: Students | null = await this.studentRepository.FindOnPhone(inputuser.phone);
        if(userphonecheck) throw new HttpException('Phone is used.', 400);

        const usercodecheck: Students | null = await this.studentRepository.FindOnCode(inputuser.student_code);
        if(usercodecheck) throw new HttpException('Code is used.', 400);

        const student: OutputRegisterStudent = await this.studentRepository.CreateStudent(inputuser);

        return student;
    }

}