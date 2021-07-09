import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsString, IsEmail, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { v4 as uuid } from 'uuid';
@Schema({ timestamps: true })
export class UserData extends Document{
    @Prop({ unique:true , default : uuid})
    id: string
    @Prop()
    Email : string
    @Prop()
    Name : string
   }
export const  UserDataSchema = SchemaFactory.createForClass(UserData);