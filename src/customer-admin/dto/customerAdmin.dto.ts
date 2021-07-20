import { IsNotEmpty } from 'class-validator';
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
export class customerAdminDto{
    FormType: formType[]
    FirstName: string
    LastName: string
    Email: string
    PhoneNumber: string
    Country: string
    State: string
    AddMore:addMore[]
}