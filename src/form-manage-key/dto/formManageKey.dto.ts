import { IsEmail, IsNotEmpty } from 'class-validator';

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

export class formManageKeyDto{
   
  formType: string
  Email: string
  FirstName: string
  LastName: string
  PhoneNumber: string
  Country: string
  State: string
  UserId:string
  UserStatus:string
  AddMore:addMore[]
}
