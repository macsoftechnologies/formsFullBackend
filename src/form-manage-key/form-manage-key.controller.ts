import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { formManageKeyDto } from './dto/formManageKey.dto';
import { FormManageKeyService } from './form-manage-key.service';

@Controller('form-manage-key')
export class FormManageKeyController {

    constructor(private formManageKeyService:FormManageKeyService) { }
    
    @Post()
    async create(@Body() req: formManageKeyDto) {
        try {
            const result = await this.formManageKeyService.createKey(req)
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