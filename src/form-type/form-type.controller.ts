import { Controller, Post, Body, HttpStatus, Get, Query } from '@nestjs/common';
import { formTypeDto } from './dto/formType.dto';
import { FormTypeService } from './form-type.service';


@Controller('form-type')
export class FormTypeController {
        constructor(private formTypeService:FormTypeService ) { }
        
        @Post('/formTypeReq')
        async create(@Body() req: formTypeDto) {
            try {
                const result = await this.formTypeService.formTypeReq(req)
                console.log("result", result);
                
                return result
            } catch (error) {
                return {
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: error.message,
                };
            }
    
        }
    
        @Get('/listOfforms')
        async listOfForms(@Query('Company_Name') Company_Name : string) {
            console.log(Company_Name)
            try {
                const response = await this.formTypeService.formsList(Company_Name)
                return response
            } catch (error) {
                return {
                    StatusCode : HttpStatus.INTERNAL_SERVER_ERROR,
                    Message : error
                }
            }
        }
    }
