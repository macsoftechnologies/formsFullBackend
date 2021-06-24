import { IsNotEmpty } from "class-validator";
export class formsManageDto{
    
    Email: string
     
    Allow?: string

    Values: string

    AddMore: addMore[]
}

export class addMore{
    moreValues: string
}