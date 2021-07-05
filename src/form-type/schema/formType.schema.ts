import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsOptional } from 'class-validator';

export class addmore{
    addmore:string
}
@Schema({ timestamps: true })
export class formType extends Document{
   
    @Prop()
    Form_Type: string
    @Prop()
    Endpoint : string
    @Prop()
    AddMore: addmore[]
    
    
    @Prop({ default: false })
    @IsOptional()
    isDeleted?: boolean;
    @Prop({default: "Active"})
    status:string
}
export const  formTypeSchema = SchemaFactory.createForClass(formType);
 
