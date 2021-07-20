import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { urlSelectDto } from './dto/urlSelect.dto';
import { UrlSelectService } from './url-select.service';

@Controller('url-select')
export class UrlSelectController {

        constructor(private urlSelectService:UrlSelectService ) { }
        
        @Post('/Url')
        async create(@Body() req: urlSelectDto) {
            try {
                const result = await this.urlSelectService.formTypeReq(req)
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
