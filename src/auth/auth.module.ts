import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {ConfigModule} from "@nestjs/config"
import {Auth, AuthSchema} from '../schemas/auth.schema'
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [ConfigModule.forRoot({isGlobal: true}), MongooseModule.forFeature([{name: Auth.name, schema: AuthSchema}])]
})
export class AuthModule {}
