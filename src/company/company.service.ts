import { Injectable, Post, HttpStatus, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { companyCreationDto, DeleteCompanyDto } from './dto/company.dto';
import { Company } from './schema/company.schema';
@Injectable()
export class CompanyService {
     constructor(@InjectModel(Company.name) private companyModel: Model<Company>){}
  
     async createCompany(req: companyCreationDto) {
        try {
            const companyRes = await this.companyModel.create(req)
            if (companyRes) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "Thank you for registering your Company",
                    data: {
                        CompanyRegistering: {
                            
                            Company_Name: companyRes.CompanyName,
                            Company_Id: companyRes.CompanyId,
                            CompanyStatus: companyRes.status
                        }
                    }
                }

            }
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: "Invalid Request"
            }

        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            };
        }
    }

    async getCompanies() {
        const users = await this.companyModel.find().exec();
        return users;
    }

    async delete(body: DeleteCompanyDto) {
        try {

              console.log(body)
            const deleteRes = await this.companyModel.deleteOne({CompanyId:body.CompanyId});
        console.log(deleteRes, "deleteRes...")

            if (deleteRes.n == 1) {
                return {
                    statusCode: HttpStatus.OK,
                    message: 'Company deleted successfully',
            
                };
            }
            return {
                StatusCode: HttpStatus.BAD_REQUEST,
                Message: "Company deletion Failed"
            }
            
        } catch (error) {
            let error_response = {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                data: null,
                message: error,
            };
            return error_response;
        }

    }
   
  /*  async UpdateUser(body: updateUserDto) {
        try {
             console.log(body)
            const updateRes = await this.companyModel.updateOne({ CompanyId: body.CompanyId ,CompanyName: body.CompanyName},{Users:body.Users})
             console.log(updateRes, "update,,res")
            if (updateRes.nModified == 1) {
                return {
                    StatusCode: HttpStatus.OK,
                    Message: "User added SuccessFully"
                }
            }
            return {
                StatusCode: HttpStatus.BAD_REQUEST,
                Message: "Updated Failed"
            }
        } catch (error) {
            return {
                StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                Message: error.message
            }
        }
      }
  */     
}
