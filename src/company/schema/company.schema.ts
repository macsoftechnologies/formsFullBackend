import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString, IsEmail, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { v4 as uuid } from 'uuid';
@Schema({timestamps: true})
/*export class user
 {  Name:string
    role:string
    PhoneNumber:number
    Email:string
 }*/
export class Company extends Document{
    @Prop()
    CompanyName: string
   
    @Prop({required : true , unique:true , default : uuid})
    CompanyId: string

    @Prop({ default: false })
    @IsOptional()
    isDeleted?: boolean;

    @Prop({default: "Active"})
    status:string
   
} 

export const CompanySchema = SchemaFactory.createForClass(Company)