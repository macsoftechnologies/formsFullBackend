import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminLogin, AdminRegister } from './dto/admin.dto';

@Controller('admin')
export class AdminController {

    constructor(private adminService: AdminService) { }
   
    @Post('/register')
    async create(@Body() req: AdminRegister) {
        try {
            const result = await this.adminService.Create(req)
            console.log("result", result);
            
            return result
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            };
        }
    }

    
   
    @Post('/login')
    async login(@Body() req: AdminLogin) {
        try {
            const result = await this.adminService.Login(req)
            return result
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            };
        }

    }
}