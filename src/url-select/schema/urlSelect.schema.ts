import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsOptional } from 'class-validator';

export class addmore{
    addmore:string
}

export class values{
   values:UrlValues
}

export class UrlValues{
    Values:string
    status:string
}
@Schema({ timestamps: true })
export class urlSelect extends Document{
   
    @Prop()
    urlValues: values[]
    
     @Prop()
    AddMore: addmore[]
    
}
export const  urlSelectSchema = SchemaFactory.createForClass(urlSelect);
 
