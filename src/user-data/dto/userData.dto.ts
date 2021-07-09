import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class userDataDto {
    
    @ApiProperty()
    
    Email: string;
   
    
    id: string

    Name:string
  
}