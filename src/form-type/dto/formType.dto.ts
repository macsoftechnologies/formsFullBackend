import { IsNotEmpty } from 'class-validator';
export class addmore{
    addmore:string
}

export class form_Type{
    formType:string
}

export class endPoint{
  endpoint:string
}
export class formTypeDto{
    @IsNotEmpty()
    Form_Type :form_Type[]
    @IsNotEmpty()
    Endpoint:endPoint[]
    AddMore:addmore[]
}