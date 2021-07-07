import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsOptional  } from "class-validator";
// export class addmore{
//     add:String
// }
export class values{
    value1:string
    value2:string
}
@Schema({ timestamps: true})
export class formsManage extends Document{
    // @Prop()
    // Email:string
    @Prop({ default: 'pending'})
    AllowStatus:string
    @Prop()
    Values:values[]
    // @Prop()
    // AddMore: addmore[]
}
export const formsManageSchema = SchemaFactory.createForClass(formsManage);

