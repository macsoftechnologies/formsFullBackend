import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsOptional } from 'class-validator';

export class addmore{
    addmore:string
}

export class values{
   values:GlobalValue
}

export class GlobalValue{
    Values:string
    status:string
}
@Schema({ timestamps: true })
export class GlobalValues extends Document{
   
    @Prop()
    globalValue: values[]
    
    //  @Prop()
    // AddMore: addmore[]
    
}
export const  GlobalValuesSchema = SchemaFactory.createForClass(GlobalValues);
 
