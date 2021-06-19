import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { CustomerAdminService } from './customer-admin.service';
import { customerAdminDto } from './dto/customerAdmin.dto';


@Controller('customer-admin')
export class CustomerAdminController {
        constructor(private CustomerAdminService:CustomerAdminService ) { }
        
        @Post()
        async create(@Body() req: customerAdminDto) {
            try {
                const result = await this.CustomerAdminService.createCustomerAdmin(req)
                console.log("result", result);
                
                return result
            } catch (error) {
                return {
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: error.message,
                };
            }
    
        }
}
