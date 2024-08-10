import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import {MongooseModule} from '@nestjs/mongoose';
import { StoreModule } from './store/store.module';


@Module({
  imports: [AuthModule, MongooseModule.forRoot(process.env.MongoDbUrl, {}), StoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 
