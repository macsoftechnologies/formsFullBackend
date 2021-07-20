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
// export class lName {
//     lname:string
// }
export class LastName{
    lastname:string
    // lName:lName[]
    lastNameStatus:string
}
// export class fName{
//     fname:string
// }
export  class FirstName{
    firstName:string
    firstNameStatus:string
}

export class addMore{
    addmore:string
}

export class formType{
    formtype:string
}
@Schema({timestamps: true})
export class customerAdmin extends Document{
 @Prop()
 FormType: formType[]
 @Prop()
 FirstName: string
 @Prop()
 LastName: string
 @Prop()
 Email: string
 @Prop()
 PhoneNumber: string
 @Prop()
 Country: string
 @Prop()
 AddMore: addMore[]

}
export const customerAdminSchema = SchemaFactory.createForClass(customerAdmin)
