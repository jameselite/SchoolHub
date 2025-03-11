import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { StudentsService } from './students.service';
import { InputRegisterStudent, OutputRegisterStudent } from './DTO/students.dto';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentService: StudentsService) {}

    @Post("register")
    async CreateStudent(@Body() input: InputRegisterStudent): Promise<object> {
        try {
 
            const user: OutputRegisterStudent = await this.studentService.CreateStudent(input);
            return { message: "User created successfully", user };
        } catch (err: any) {
            throw new HttpException(err.message, 400);
        }
    }
}