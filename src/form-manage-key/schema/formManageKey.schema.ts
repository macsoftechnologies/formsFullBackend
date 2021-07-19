import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString, IsEmail, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { v4 as uuid } from 'uuid';
export class EmailStatus{
    mailId: string
    @Prop({default: "Pending"})
    status:string
}

export class FirstNameStatus{
    Fname: string
    @Prop({default: "Pending"})
    status:string
}

export class LastNameStatus{
    Lname: string
    @Prop({default: "Pending"})
    status:string
}

export class PhNumberStatus{
    PhNum: string
    @Prop({default: "Pending"})
    status:string
}

export class CountryStatus{
    country: string
    @Prop({default: "Pending"})
    status:string
}
export class StateStatus{
    state: string
    @Prop({default: "Pending"})
    status:string
}


export class addMore{
    addmore:string
}

@Schema({timestamps: true})
export class formManageKey extends Document{

  @Prop() 
  formType: string
  @Prop()
  Email: EmailStatus
  @Prop()
  FirstName: FirstNameStatus
  @Prop()
  LastName: LastNameStatus
  @Prop()
  PhoneNumber: PhNumberStatus
  @Prop()
  Country: CountryStatus
  @Prop()
  State: StateStatus
  @Prop()
  UserId:string
  @Prop()
  UserStatus:string
  @Prop()
  AddMore:addMore[]
  
}
export const formManageKeySchema = SchemaFactory.createForClass(formManageKey)