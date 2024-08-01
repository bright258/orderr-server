import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import {CreateUserDto} from './dto/createAuthDto'


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  

}
