import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString, IsEmail, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { v4 as uuid } from 'uuid';
export  class PhoneNumber{
    phoneNumber:string
    phNumberStatus:string
}
export  class State{
    state:string
    stateStatus:string
}
 export  class Country{
    country:string
    countryStatus:string
}

export  class Email{
    EmailId:string
    emailIdStatus:string
}

export class LastName{
    lastname:string
    lastNameStatus:string
}

export  class FirstName{
    firstName:string
    firstNameStatus:string
}

export class addMore{
    addmore:string
}
export class formtype{
    FormType:string
}
@Schema({timestamps: true})
export class formManageKey extends Document{

  @Prop() 
  formType: formtype[]
  @Prop()
  Email: string
  @Prop()
  FirstName: string
  @Prop()
  LastName: string
  @Prop()
  PhoneNumber: string
  @Prop()
  Country: string
  @Prop()
  StateStatus: string
  @Prop()
  UserId:string
  @Prop()
  UserStatus:string
  @Prop()
  AddMore:addMore[]
}
export const formManageKeySchema = SchemaFactory.createForClass(formManageKey)