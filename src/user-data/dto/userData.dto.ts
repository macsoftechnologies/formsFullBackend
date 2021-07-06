import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class userDataDto {
    @ApiProperty()
    firstName: string;
    
    @ApiProperty()
    @IsString()
    lastName: string;

    @ApiProperty()
    @IsEmail()
    email: string;
   
    
    id: string

    name:string
  
}