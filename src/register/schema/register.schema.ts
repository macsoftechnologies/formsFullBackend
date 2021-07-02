import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsString, IsEmail, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { v4 as uuid } from 'uuid';
@Schema({ timestamps: true })
export class AppUsers extends Document{
    @Prop({required : true , unique:true , default : uuid})
    UserId: string
    @Prop()
    FirstName : string
    @Prop()
    LastName : string
    @Prop()
    Email : string
    // @Prop()
    // MobileNum : string
    // @Prop()
    // Password : string
    // @Prop()
    // otp: string;
    // @Prop()
    // otpExpiryTime: string;
    // @Prop({ default: false })
    // @IsOptional()
    // isDeleted?: boolean;
    // @Prop({default: "Active"})
    // status:string
   
    // @Prop()
    // Product_id:string

   // @Prop()
    //Rating:number
}
export const  AppUsersSchema = SchemaFactory.createForClass(AppUsers);