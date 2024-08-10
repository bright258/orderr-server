import { Module } from '@nestjs/common';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import {ConfigModule} from "@nestjs/config";
import { MongooseModule } from '@nestjs/mongoose';
import { Store, StoreSchema } from 'src/schemas/store.schema';


@Module({
  controllers: [StoreController],
  providers: [StoreService],
  imports: [ConfigModule.forRoot({isGlobal: true}), MongooseModule.forFeature([{name: Store.name, schema: StoreSchema}])]
})
export class StoreModule {}
