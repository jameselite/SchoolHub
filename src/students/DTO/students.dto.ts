import { IsString, IsEmail, IsNotEmpty, IsNumber, MinLength } from "class-validator";

export class InputStudent {
    @IsString()
    @IsNotEmpty({ message: "Full name is required." })
    fullname: string;

    @IsEmail({}, { message: "Invalid email format." })
    @IsNotEmpty({ message: "Email is required." })
    email: string;

    @IsString()
    @IsNotEmpty({ message: "Phone is required." })
    phone: string;

    @IsString()
    @MinLength(6, { message: "Password must be at least 6 characters long." })
    @IsNotEmpty({ message: "Password is required." })
    password: string;

    @IsString()
    @IsNotEmpty({ message: "Student code is required." })
    student_code: string;

    @IsString()
    @IsNotEmpty({ message: "Address is required." })
    address: string;

    @IsNumber({}, { message: "Degree must be a number." })
    @IsNotEmpty({ message: "Degree is required." })
    degree: number;
}

export class OutputStudent {
    fullname: string;
    email: string;
    phone: string;
    student_code: string;
    address: string;
    degree: number;
}