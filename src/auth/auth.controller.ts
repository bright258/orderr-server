import { Body, Controller, Get, Post } from '@nestjs/common';
import  {AuthService} from "./auth.service"
import { CreateUserDto } from 'src/dto/createAuthDto';
import { Auth } from 'src/schemas/auth.schema';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    getYeah(): string {    
      return this.authService.getYeah();
    }

    @Post('/post')
    async createUser(@Body() createUserDto: CreateUserDto): Promise<Auth>{
        return await this.authService.createUser(createUserDto)
    }
}
