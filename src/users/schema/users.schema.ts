import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';
@Schema({ timestamps: true })
export class users extends Document{
   
    @Prop()
    Company_Id: string
    @Prop({required : true })
    FormType: string
    @Prop({required : true , unique:true , default : uuid})
    UserId: string
    @Prop({required : true, unique:true})
    Email: string
    @Prop({default: "Active"})
    UserStatus: string
    @Prop()
    FirstName:string
    @Prop()
    LastName:string
    @Prop()
    PhoneNumber:string
    @Prop()    
    Country:string
    @Prop()
    State:string
}
export const  usersSchema = SchemaFactory.createForClass(users);