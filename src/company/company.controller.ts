import { Controller, Post, Body, HttpStatus, Get, Delete, Put, Param } from '@nestjs/common';
import { CompanyService } from './company.service';
import { companyCreationDto, DeleteCompanyDto, updateCompanyDto } from './dto/company.dto';

@Controller('company')
export class CompanyController {
    constructor(private companyService: CompanyService){}
    @Post('/createCo')
    async create(@Body() req:companyCreationDto){
        try {
            const result = await this.companyService.createCompany(req)
            console.log("result",result);
            return result
        } catch(error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message
            };
        }
    }

//Getting List of Companies
    @Get('/ListingCo')
    async getAllUsers(){
        try{
        const companies = await this.companyService.getCompanies();
        return companies
    } catch(error) {
        return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message
        };
    }
    }

// Deletting Company 
@Post('/delete')
async deleteUser(@Body() req: DeleteCompanyDto) { 
  try {
    let response = await this.companyService.delete(req);

    return response
  } catch (error) {
    return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
    };
  }
} 

@Post('/update')
async update(@Body() req: updateCompanyDto) {
    console.log(req)
    try {
        const result = await this.companyService.UpdateCompany(req)
        return result
    } catch (error) {
        return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
    }
}

}
