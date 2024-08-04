import { Body, Controller, Get, Post, Res, HttpException, HttpStatus, Param } from '@nestjs/common';
import  {AuthService} from "./auth.service"
import { CreateUserDto, LoginDto } from 'src/dto/createAuthDto';
import { Auth } from 'src/schemas/auth.schema';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    
    @Post('/sign-up')
    async createUser(@Body() createUserDto: CreateUserDto, @Res() res ){
        return await this.authService.createUser(createUserDto, res)
    }

    @Post('/login')
    async signIn(@Body() loginDto: LoginDto) {
        try {
        return await this.authService.signIn(loginDto);
        } catch (err) {
        throw new HttpException(
            {
            status: HttpStatus.UNAUTHORIZED,
            error: 'You are not authorized to do this',
            },
            HttpStatus.UNAUTHORIZED,
            {
            cause: err,
            },
        );
        }
    }


    @Get(':id')
    async findOne(@Param('id') id: string) {
        
        
        return await this.authService.findOne(id)
    }

}
