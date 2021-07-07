import { IsNotEmpty } from "class-validator";
export class formsManageDto{
    
    Email: string
     
    Allow?: string

    Values: values[]

    AddMore: addMore[]
}

export class addMore{
    moreValues: string
}

export class values{
    value1:string
    value2:string

}