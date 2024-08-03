import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from "@nestjs/mongoose";
import {AuthSchema, Auth}  from  '../schemas/auth.schema';
import {CreateUserDto, LoginDto} from '../dto/createAuthDto'
import {Response} from 'express'
import * as bcrypt from 'bcryptjs';
import {JwtService} from '@nestjs/jwt'

@Injectable()
export class AuthService {

    constructor(@InjectModel(Auth.name) 
    private authModel: Model<Auth>,
    private jwtService:JwtService
) {}

    async createUser(createUserDto: CreateUserDto, res: Response){
        try{
            const password = await bcrypt.hash(createUserDto.password, 10)
            createUserDto.password = password
            const createdUser =  new this.authModel(createUserDto);
            await createdUser.save().then(()=>{
                return res.send({
                    message: 'Account created', 
                })

            });
           
        }catch(error){
           
            throw new Error('an error occured' + error)

        }
        
      }

      async signIn(loginDto: LoginDto): Promise<{access_token : string}> {
        const existingUser = await this.checkIfUserAlreadyExists(loginDto);
    
        if (existingUser) {
          const passwordChecker = await this.checkIfPasswordsAreTheSame(
            loginDto.password,
            existingUser,
          );
          if (passwordChecker === false) {
            throw new HttpException(
              {
                status: HttpStatus.NOT_FOUND,
                error: 'Invalid password',
              },
              HttpStatus.NOT_FOUND,
            );
          } else {
            const payload = {
              sub: existingUser?.id,
              email: existingUser?.email,
            };
           return {access_token: await this.jwtService.signAsync(payload)};
          }
        } else {
          throw new HttpException(
            {
              status: HttpStatus.NOT_FOUND,
              error: 'User not found',
            },
            HttpStatus.NOT_FOUND,
          );
        }
      }

      private async checkIfUserAlreadyExists(loginDto: LoginDto) {
        try {
          const user = await this.authModel.findOne({
            email: loginDto.email,
          });
          return user;
        } catch (err) {
          return err;
        }
      }
    
      private async checkIfPasswordsAreTheSame(password: string, user: any) {
        try {
          const passwordsAretheSame: boolean = await bcrypt.compare(
            password,
            user?.password,
          );
    
          if (passwordsAretheSame === false) {
            return false;
          } else {
            return true;
          }
        } catch (err) {
          return err;
        }
      }
    




}
