import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsOptional } from 'class-validator';

export class addmore{
    addmore:string
}
@Schema({ timestamps: true })
export class formType extends Document{
   
    @Prop({required : true})
    Form_Type: string
    @Prop({required : true})
    Endpoint : string
    @Prop()
    AddMore: addmore[]
    @Prop({required : true})
    Company_Name : string
    @Prop({ default: false })
    @IsOptional()
    isDeleted?: boolean;
    @Prop({default: "Active"})
    status:string
}
export const  formTypeSchema = SchemaFactory.createForClass(formType);
 
