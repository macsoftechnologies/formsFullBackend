import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsOptional } from 'class-validator';
@Schema({ timestamps: true })
export class Applogs extends Document{
   
    @Prop()
    id: Number
    @Prop()
    error_type :  String
    @Prop()
    error_code :  String
    @Prop()
    error_message : String
    @Prop()
    error_info : String
    @Prop()
    request_info :  String
    @Prop()
    createdAt : String 
    @Prop()
    updatedAt : String  
}
export const  ApplogsSchema = SchemaFactory.createForClass(Applogs);
 
