import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsOptional  } from "class-validator";
@Schema({ timestamps: true})
export class formsManage extends Document{
    @Prop({required: true})
    Email:string
    @Prop({ default: 'pending', required: true})
    Allow?:string
}
export const formsManageSchema = SchemaFactory.createForClass(formsManage);