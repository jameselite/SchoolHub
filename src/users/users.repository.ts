import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "prisma/prisma.service";
import { ResUserDTO } from "./users.dto";

@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService) {}

    async GetAll(): Promise<User[]> {
        return this.prisma.user.findMany()
    }

    async GetOnPhone(phone: string): Promise<ResUserDTO | null> {
        if(!phone) throw new Error("Phone can not be empty.");

        const user: User | null = await this.prisma.user.findUnique({ where: { phone: phone }});

        return user;
    }

    async GetOnEmail(email: string): Promise<ResUserDTO | null> {
        if(!email) throw new Error("Email can not be empty.");

        const user: User | null = await this.prisma.user.findUnique({ where: { email: email }});

        return user;
    }

    async Create(email: string, phone: string, hashedPassword: string, fullname: string): Promise<ResUserDTO | null> {

        const user: User | null = await this.prisma.user.create({ data: {
            fullname: fullname,
            email: email,
            password: hashedPassword,
            phone: phone
        }});

        return user;
    }
}