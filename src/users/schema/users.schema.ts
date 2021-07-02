import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';
@Schema({ timestamps: true })
export class users extends Document{
   
    // @Prop()
    // CompanyId: string
    // @Prop()
    // form: string
    @Prop({ unique:true , default : uuid})
    UserId: string
    @Prop({ unique:true})
    Email: Email[]
    @Prop({default: "Active"})
    UserStatus: string
    @Prop()
    FirstName: FirstName[]
    @Prop()
    LastName: LastName[]
    // @Prop()
    // PhoneNumber: string
    // @Prop()    
    // Country: string
    // @Prop()
    // State: string
}
export const  usersSchema = SchemaFactory.createForClass(users);

// export  class form{
//     form:string
//     @Prop({default:"active"})
//     formStatus:string
// }
// export  class CompanyId{
//     CompanyId:string
//     @Prop({default:"pending"})
//     companyIdStatus:string
// }
export  class Email{
    EmailId:string
    @Prop({default:"pending"})
    emailIdStatus:string
}
export class lName {
    lname:string
}
export class LastName{
    lastname:string
    LName:lName[]
    @Prop({default:"pending"})
    lastNameStatus:string
}
export class fName{
    fname:string
}
export  class FirstName{
    firstName:string
    fName:fName[]
    @Prop({default:"pending"})
    firstNameStatus:string
}
// export  class PhoneNumber{
//     phoneNumber:string
//     @Prop({default:"pending"})
//     phNumberStatus:string
// }
// export  class State{
//     state:string
//     @Prop({default:"pending"})
//     stateStatus:string
// }
// export  class Country{
//     country:string
//     @Prop({default:"pending"})
//     countryStatus:string
//}