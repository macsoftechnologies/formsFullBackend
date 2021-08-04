import { ApiProperty } from "@nestjs/swagger"

export class ApplogsDto{
   
    @ApiProperty()
    id: Number
    @ApiProperty()
    error_type :  String
    @ApiProperty()
    error_code :  String
    @ApiProperty()
    error_message : String
    @ApiProperty()
    error_info : String
    @ApiProperty()
    request_info :  String
    @ApiProperty()
    createdAt : String 
    @ApiProperty()
    updatedAt : String  
}