import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsString, IsEmail, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { v4 as uuid } from 'uuid';
@Schema({ timestamps: true })
export class Admin extends Document{
   
    @Prop()
    AdminName : string
    @Prop()
    Email : string
    // @Prop()
    // MobileNum : number
    @Prop()
    Password : string
   

}
export const  AdminSchema = SchemaFactory.createForClass(Admin);