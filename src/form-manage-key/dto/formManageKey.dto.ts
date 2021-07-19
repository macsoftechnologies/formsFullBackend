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

export class formtype{
    FormType: string
}

export class EmailStatus{
    mailId: string
    status:string
}

export class FirstNameStatus{
    Fname: string
    status:string
}

export class LastNameStatus{
    Lname: string
    status:string
}

export class PhNumberStatus{
    PhNum: string
    status:string
}

export class CountryStatus{
    country: string
    status:string
}
export class StateStatus{
    state: string
    status:string
}


export class formManageKeyDto{
   
  formType: formtype[]
  Email: EmailStatus
  FirstName: FirstNameStatus
  LastName: LastNameStatus
  PhoneNumber: PhNumberStatus
  Country: CountryStatus
  State: StateStatus
  UserId:string
  UserStatus:string
  AddMore:addMore[]
  
}
