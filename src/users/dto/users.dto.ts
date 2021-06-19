import { IsEmail, IsNotEmpty } from 'class-validator';
export class usersDto{
   
    FormType: string
    @IsNotEmpty()
    @IsEmail()
    Email :string
    
    Company_Id:string
    @IsNotEmpty()
    FirstName:string
    LastName:string
    PhoneNumber:string
    Country:string
    State:string
    UserId:string
    UserStatus:string
}

export class DeleteUserDto{
    DeleteType : string
    UserId:string
    }