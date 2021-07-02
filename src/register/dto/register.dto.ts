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

    // @ApiProperty()
    // @IsString()
    // MobileNum:number;

    // @ApiProperty()
    // @IsString()
    // Password: string;
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