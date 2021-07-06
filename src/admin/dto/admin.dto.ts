import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString } from "class-validator"

export class AdminRegister {
   
    
    @ApiProperty()
    @IsString()
    AdminName: string;

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
    @IsString()
    AdminName: string
    
    @ApiProperty()
    @IsString()
    @IsEmail()
    Email: string
    
    @ApiProperty()
    @IsString()
    Password: string
}