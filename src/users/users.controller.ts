import { Controller, Post, Body, HttpStatus, Get, Delete, Put, Query } from '@nestjs/common';
import { DeleteUserDto, usersDto } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}
    @Post('/createUser')
    async create(@Body() req:usersDto){
        try {
            const result = await this.usersService.createUser(req)
            console.log("result",result);
            return result
        } catch(error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message
            };
        }
    }

    @Delete('/delete')
    async deleteUser(@Body() req: DeleteUserDto) { 
      try {
        let response = await this.usersService.delete(req);
    
        return response
      } catch (error) {
        return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
      }
    }   

    @Get('/userdetails')
    async userDetails(@Query('Email') Email : string) {
        console.log(Email)
        try {
            const response = await this.usersService.UserDetails(Email)
            return response
        } catch (error) {
            return {
                StatusCode : HttpStatus.INTERNAL_SERVER_ERROR,
                Message : error
            }
        }
    }
  
    @Get('/listOfUsers')
    async listOfUsers(@Query('Company_Id') Company_Id : string) {
        console.log(Company_Id)
        try {
            const response = await this.usersService.UsersList(Company_Id)
            return response
        } catch (error) {
            return {
                StatusCode : HttpStatus.INTERNAL_SERVER_ERROR,
                Message : error
            }
        }
    }
}
