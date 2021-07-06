import { Body, Controller, Get, HttpStatus, Post, Put } from '@nestjs/common';
import { appRegisterDto, AppUserLogin, DeleteUserDto, updateUser } from './dto/register.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {

    constructor(private registerService: RegisterService) { }
    @Post()
    async create(@Body() req: appRegisterDto) {
        try {
            const result = await this.registerService.Create(req)
            console.log("result", result);
            
            return result
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            };
        }
    }

        @Get('/listOfUsers')
        async AllUsers() {
            console.log()
            try {
                const response = await this.registerService.UsersList()
                return response
            } catch (error) {
                return {
                    StatusCode : HttpStatus.INTERNAL_SERVER_ERROR,
                    Message : error
                }
            }
        }
    

    @Post('/update')
    async userUpdate(@Body() req: appRegisterDto) {
        console.log(req,'update')
        try {
            const result = await this.registerService.updateUser(req)
            return result
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            };
        }
    }

    @Post('/delete')
    async deleteUser(@Body() req: DeleteUserDto) { 
      try {
        let response = await this.registerService.delete(req);
    
        return response
      } catch (error) {
        return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
      }
    } 
    // @Post('/login')
    // async login(@Body() req: AppUserLogin) {
    //     try {
    //         const result = await this.registerService.Login(req)
    //         return result
    //     } catch (error) {
    //         return {
    //             statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    //             message: error.message,
    //         };
    //     }

    // }
}

