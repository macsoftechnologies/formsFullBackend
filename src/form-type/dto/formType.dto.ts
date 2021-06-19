import { IsNotEmpty } from 'class-validator';
export class formTypeDto{
   
    @IsNotEmpty()
    Company_Name: string
    @IsNotEmpty()
    Form_Type :string
    @IsNotEmpty()
    Endpoint:string
    AddMore:string
}