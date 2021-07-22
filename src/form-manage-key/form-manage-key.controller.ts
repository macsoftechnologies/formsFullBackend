import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { request } from 'express';
import { formManageKeyDto } from './dto/formManageKey.dto';
import { FormManageKeyService } from './form-manage-key.service';
import { EmailStatus } from './schema/formManageKey.schema';

@Controller('form-manage-key')
export class FormManageKeyController {

    constructor(private formManageKeyService:FormManageKeyService) { }
    
    @Post()
    async create(@Body() req: formManageKeyDto) {
        try {
            const records = req.formType.map((formType) => {
                return {
                  ...req,
                  formType:formType.FormType,
                };
              });
              console.log(records)
            const result = await this.formManageKeyService.createKey(records)
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
    async listOfForms(@Query('Email') Email : any) {
        console.log()
        try {
            const response = await this.formManageKeyService.formsList(Email)
            return response
        } catch (error) {
            return {
                StatusCode : HttpStatus.INTERNAL_SERVER_ERROR,
                Message : error
            }
        }
    }
}