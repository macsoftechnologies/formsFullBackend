import { IsEmail, IsNotEmpty } from 'class-validator';
// export  class formStatus{
//     form:string
//     formStatus:string
// }
// export  class CompanyIdStatus{
//     CompanyId:string
//     companyIdStatus:string
// }
// export  class Email{
//     EmailId:string
//     emailIdStatus:string
// }
// export  class LastName{
//     lastName:string
//     lastNameStatus:string
// }
// export  class FirstNameStatus{
//     firstName:string
//     firstNameStatus:string
// }
// export  class PhoneNumberStatus{
//     phoneNumber:string
//     phNumberStatus:string
// }
// export  class StateStatus{
//     state:string
//     stateStatus:string
// }
// export  class CountryStatus{
//     country:string
//     countryStatus:string
// }

export  class Email{
    EmailId:string
    emailIdStatus:string
}
export class lName {
    lname:string
}
export class LastName{
    lastname:string
    lName:lName[]
    lastNameStatus:string
}
export class fName{
    fname:string
}
export  class FirstName{
    firstName:string
    fName:fName[]
    firstNameStatus:string
}

export class usersDto{
   
  //formStatus: string
  Email: string
 // CompanyIdStatus: string
  FirstName: string
  LastName: string
//   PhoneNumberStatus: string
//   CountryStatus: string
//   StateStatus: string
  UserId:string
  UserStatus:string
}

export class DeleteUserDto{
    DeleteType : string
    UserId:string
    }