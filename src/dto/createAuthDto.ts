import {
    IsEmail,
    IsNotEmpty,
    MinLength,
    MaxLength,
    Matches,
    IsString
  } from 'class-validator';
  
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    fullName: string;
    
    @IsEmail()
    @IsNotEmpty()
    email: string;
   
    @MinLength(6, { message: 'Password is too short' })
    @IsNotEmpty()
    password: string;
  
   
  }

  export class LoginDto {
    @IsString()
    @IsNotEmpty()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    password: string;
  }
  
  