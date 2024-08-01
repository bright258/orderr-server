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
    fullName: string;
    
    @IsEmail()
    email: string;
   
    @MinLength(6, { message: 'Password is too short' })
    password: string;
  
   
  }
  