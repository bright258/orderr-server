import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from "@nestjs/mongoose";
import {AuthSchema, Auth}  from  '../schemas/auth.schema';
import {CreateUserDto} from '../dto/createAuthDto'

@Injectable()
export class AuthService {

    constructor(@InjectModel(Auth.name) private authModel: Model<Auth>) {}

    getYeah(): string{
        return 'Yeah'
    }

    async createUser(createUserDto: CreateUserDto): Promise<Auth> {
        const createdUser = new this.authModel(createUserDto);
        return await createdUser.save();
      }
    
}
