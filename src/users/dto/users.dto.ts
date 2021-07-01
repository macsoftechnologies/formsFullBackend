import { IsEmail, IsNotEmpty } from 'class-validator';
export  class formStatus{
    form:string
    formStatus:string
}
export  class CompanyIdStatus{
    CompanyId:string
    companyIdStatus:string
}
export  class EmailStatus{
    EmailId:string
    emailIdStatus:string
}
export  class LastNameStatus{
    lastName:string
    lastNameStatus:string
}
export  class FirstNameStatus{
    firstName:string
    firstNameStatus:string
}
export  class PhoneNumberStatus{
    phoneNumber:string
    phNumberStatus:string
}
export  class StateStatus{
    state:string
    stateStatus:string
}
export  class CountryStatus{
    country:string
    countryStatus:string
}

export class usersDto{
   
    Forms: formStatus[]
    Email :EmailStatus[]

    CompanyId:CompanyIdStatus
    FirstName:FirstNameStatus
    LastName:LastNameStatus
    PhoneNumber:PhoneNumberStatus
    Country:CountryStatus
    State:StateStatus
    UserId:string
    UserStatus:string
}

export class DeleteUserDto{
    DeleteType : string
    UserId:string
    }