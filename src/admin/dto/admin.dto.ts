import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString } from "class-validator"

export class AdminRegister {
   
    
    // @ApiProperty()
    // @IsString()
    // AdminName: string;

    @ApiProperty()
    @IsEmail()
    Email: string;

    // @ApiProperty()
    // @IsString()
    // MobileNum:number;

    @ApiProperty()
    @IsString()
    Password: string;
}


export class AdminLogin {
    
  
    
    @ApiProperty()
    @IsEmail()
    Email: string
    
    @ApiProperty()
    Password: string
}