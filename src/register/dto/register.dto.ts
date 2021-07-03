import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class appRegisterDto {
    @ApiProperty()
    FirstName: string;
    
    @ApiProperty()
    @IsString()
    LastName: string;

    @ApiProperty()
    @IsEmail()
    Email: string;
   
    
    UserId: string
    // @ApiProperty()
    // @IsString()
    // MobileNum:number;

    // @ApiProperty()
    // @IsString()
    // Password: string;
}
export class updateUser{
    @ApiProperty()
    UserId : string

    @ApiProperty()
    FirstName : string

    @ApiProperty()
    LastName: string

    @ApiProperty()
    Email:string
    
}
export class AppUserLogin {
    
    @ApiProperty()
    @IsString()
    MobileNum: string
    
    @ApiProperty()
    @IsString()
    @IsEmail()
    Email: string
    
    @ApiProperty()
    @IsString()
    Password: string
}