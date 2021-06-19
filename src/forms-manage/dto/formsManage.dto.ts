import { IsNotEmpty } from "class-validator";
export class formsManageDto{
    @IsNotEmpty()
    Email: string
    @IsNotEmpty()
    Allow?: string
}