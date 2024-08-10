import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Store}  from  '../schemas/store.schema';
import { Model } from 'mongoose';
import {Response} from "express";


@Injectable()
export class StoreService {

    constructor(@InjectModel(Store.name) 
    private storeModel: Model<Store>,
){

    async function  createStore(res: Response){
        try{
            
          
            
             const createdStore =  new this.storeModel();
             await createdStore.save().then(()=>{
                 return res.send({
                     message: 'Account created', 
                 })
   
             });}catch(error){
            
             throw new Error('an error occured' + error)
 
         }

    }





    
}
}
function createStore() {
    throw new Error('Function not implemented.');
}

