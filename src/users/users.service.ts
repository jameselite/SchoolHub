import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import * as bcrypt from "bcryptjs";
import { UserRepository } from './users.repository';
import { ResUserDTO, UserDTO } from './users.dto';

@Injectable()
export class UsersService {

    constructor(private readonly userRepository: UserRepository) {}

    async Create(userbody: UserDTO): Promise<ResUserDTO | null> {
        try {
            
            if(!userbody) throw new Error("Requested data can not be empty.");

            const isEmailExist: ResUserDTO | null = await this.userRepository.GetOnEmail(userbody.email);
            const isPhoneExist: ResUserDTO | null = await this.userRepository.GetOnPhone(userbody.phone);

            if(isEmailExist) throw new Error("Email is used.");
            if(isPhoneExist) throw new Error("Phone number is used.");

            const hashedPassword: string = await bcrypt.hash(userbody.password, 10);

            const newUser: ResUserDTO | null = await this.userRepository.Create(userbody.email, userbody.phone, hashedPassword, userbody.fullname);

            if (!newUser) {
                throw new Error("Failed to create user.");
            }

            const resUser: ResUserDTO = {
                id: newUser.id,
                email: newUser.email,
                phone: newUser.phone,
                fullname: newUser.fullname,
            };

            return resUser;

        } catch (err: any) {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}