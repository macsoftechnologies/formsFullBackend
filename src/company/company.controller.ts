import { Controller, Post, Body, HttpStatus, Get, Delete, Put } from '@nestjs/common';
import { CompanyService } from './company.service';
import { companyCreationDto, DeleteCompanyDto } from './dto/company.dto';

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
@Delete('/delete')
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

/*@Put('/update')
async update(@Body() req: updateUserDto) {
    console.log(req)
    try {
        const result = await this.companyService.UpdateUser(req)
        return result
    } catch (error) {
        return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
    }
}
*/

}
