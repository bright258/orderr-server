import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {HydratedDocument} from 'mongoose';

export type StoreDocument = HydratedDocument<Store>

@Schema()
export class Store{
   
    @Prop()
    storeName: string;

    @Prop()
    ownerId: string

    @Prop()
    description: string

    @Prop()
    status: string



}

export const StoreSchema = SchemaFactory.createForClass(Store)