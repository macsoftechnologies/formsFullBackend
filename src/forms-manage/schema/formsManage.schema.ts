import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsOptional  } from "class-validator";
export class addmore{
    add:String
}
@Schema({ timestamps: true})
export class formsManage extends Document{
    @Prop()
    Email:string
    @Prop({ default: 'pending'})
    Allow?:string
    @Prop()
    Values:string
    @Prop()
    AddMore: addmore[]
}
export const formsManageSchema = SchemaFactory.createForClass(formsManage);