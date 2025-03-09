import type { User } from "@prisma/client";

export class UserDTO {
    id: number;
    email: string;
    phone: string;
    fullname: string;
    password: string;
}

export class ResUserDTO {
    id: number;
    email: string;
    phone: string;
    fullname: string;
}