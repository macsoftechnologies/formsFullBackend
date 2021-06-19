import { IsNotEmpty, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class companyCreationDto{
    @IsNotEmpty()
    CompanyName: string
    CompanyId: string
    status: string
}

export class DeleteCompanyDto{
    DeleteType : string
    CompanyId:string
    }

/*export class updateUserDto{
     @ApiProperty()
     @IsNotEmpty()
     CompanyId : string
    
     @ApiProperty()
     @IsNotEmpty()
     CompanyName: string
       
     @IsArray()
     Users:users[]
    }
     export class users
     {  Name:string
        role:string
        Email:string
        PhoneNumber:number
     }*/