import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString, IsEmail, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { v4 as uuid } from 'uuid';

@Schema({timestamps: true})
export class customerAdmin extends Document{
 @Prop()
 firstName: string
 @Prop()
 lastName: string
 @Prop()
 Email: string
 @Prop()
 phoneNumber: string
 @Prop()
 Country: string
 @Prop()
 state: string

}
export const customerAdminSchema = SchemaFactory.createForClass(customerAdmin)
