import { IsNotEmpty } from 'class-validator';
export class formTypeDto{
   
    
    
    @IsNotEmpty()
    Form_Type :string
    @IsNotEmpty()
    Endpoint:string
    AddMore:string
}