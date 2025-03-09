import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ResUserDTO, UserDTO } from './users.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post('register') 
    async Register(@Body() userbody: UserDTO) {
        return this.userService.Create(userbody)
    }
}