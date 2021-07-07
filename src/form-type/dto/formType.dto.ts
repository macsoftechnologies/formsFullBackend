import { IsNotEmpty } from 'class-validator';
// export class addmore{
//     addmore:string
// }

// export class form_Type{
//     formType:string
// }

// export class endPoint{
//   endpoint:string
// }

export class formResponse{
    formType:string
    endpoint:string
}
export class formTypeDto{
    
    Form_Response :formResponse[]
    // @IsNotEmpty()
    // Endpoint:endPoint[]
    // AddMore:addmore[]
}