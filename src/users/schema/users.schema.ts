import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';
export  class formStatus{
    form:string
    @Prop({default:"active"})
    formStatus:string
}
export  class CompanyIdStatus{
    CompanyId:string
    @Prop({default:"pending"})
    companyIdStatus:string
}
export  class EmailStatus{
    EmailId:string
    @Prop({default:"pending"})
    emailIdStatus:string
}
export  class LastNameStatus{
    lastName:string
    @Prop({default:"pending"})
    lastNameStatus:string
}
export  class FirstNameStatus{
    firstName:string
    @Prop({default:"pending"})
    firstNameStatus:string
}
export  class PhoneNumberStatus{
    phoneNumber:string
    @Prop({default:"pending"})
    phNumberStatus:string
}
export  class StateStatus{
    state:string
    @Prop({default:"pending"})
    stateStatus:string
}
export  class CountryStatus{
    country:string
    @Prop({default:"pending"})
    countryStatus:string
}
@Schema({ timestamps: true })
export class users extends Document{
   
    @Prop()
    CompanyId: CompanyIdStatus
    @Prop()
    Forms: formStatus
    @Prop({ unique:true , default : uuid})
    UserId: string
    @Prop({required : true, unique:true})
    Email: EmailStatus
    @Prop({default: "Active"})
    UserStatus: string
    @Prop()
    FirstName: FirstNameStatus
    @Prop()
    LastName: LastNameStatus
    @Prop()
    PhoneNumber: PhoneNumberStatus
    @Prop()    
    Country: CountryStatus
    @Prop()
    State: StateStatus
}
export const  usersSchema = SchemaFactory.createForClass(users);