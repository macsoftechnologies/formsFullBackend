import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApplogsService } from 'src/applogs/applogs.service';
import { ApplogsDto } from 'src/applogs/dto/applogs.dto';
import { AdminService } from './admin.service';
import { AdminLogin, AdminRegister } from './dto/admin.dto';

@Controller('admin')
export class AdminController {

    constructor(private adminService: AdminService, private applogsService:ApplogsService) { }
   
    @Post('/register')
    async create(@Body() req: AdminRegister, log: ApplogsDto) {
        try {
            const result = await this.adminService.Create(req)
            const logApi = await this.applogsService.createLogs(log)
            console.log("result", result);
            console.log("logApi", logApi)
            
            return result
        } catch (error) {
            const logCatch = await this.applogsService.createLogs(log)
            console.log("logCatch",logCatch)
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