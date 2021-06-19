import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { formsManageDto } from './dto/formsManage.dto';
import { FormsManageService } from './forms-manage.service';

@Controller('forms-manage')
export class FormsManageController {
    constructor(private formsManageService:FormsManageService) { }
    
    @Post()
    async create(@Body() req: formsManageDto) {
        try {
            const result = await this.formsManageService.formsManage(req)
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
