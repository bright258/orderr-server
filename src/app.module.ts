import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import {MongooseModule} from '@nestjs/mongoose';


@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb+srv://myNetflix:aQn0uylEtLjFk9uR@cluster0.9czs9zw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 