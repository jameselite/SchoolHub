import { Injectable } from '@nestjs/common';
import { StudentsRepository } from './students.repository';
import { InputStudent, OutputStudent } from './DTO/students.dto';

@Injectable()
export class StudentsService {

    constructor(private readonly studentRepository: StudentsRepository) {}

    async CreateStudent(inputuser: InputStudent): Promise<OutputStudent> {

        await this.studentRepository.FindOnEmail(inputuser.email);
        await this.studentRepository.FindOnPhone(inputuser.phone);
        await this.studentRepository.FindOnCode(inputuser.student_code);

        const student: OutputStudent = await this.studentRepository.CreateStudent(inputuser);

        return student;
    }
}