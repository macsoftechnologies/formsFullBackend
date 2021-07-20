import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { GlobalValuesDto } from './dto/globalValues.dto';
import { GlobalValuesService } from './global-values.service';

@Controller('global-values')
export class GlobalValuesController {


        constructor(private globalValueService:GlobalValuesService ) { }
        
        @Post('/global')
        async create(@Body() req: GlobalValuesDto) {
            try {
                const result = await this.globalValueService.formTypeReq(req)
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

