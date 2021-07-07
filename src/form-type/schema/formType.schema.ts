import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsOptional } from 'class-validator';

export class addmore{
    addmore:string
}

export class form_Type{
    formType:string
}

export class endPoint{
  endpoint:string
}
@Schema({ timestamps: true })
export class formType extends Document{
   
    @Prop()
    Form_Type: form_Type[]
    @Prop()
    Endpoint : endPoint[]
    @Prop()
    AddMore: addmore[]
    
    
    @Prop({ default: false })
    @IsOptional()
    isDeleted?: boolean;
    @Prop({default: "Active"})
    status:string
}
export const  formTypeSchema = SchemaFactory.createForClass(formType);
 
