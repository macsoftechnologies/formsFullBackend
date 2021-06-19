import { Injectable, Post, HttpStatus, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { customerAdminDto } from './dto/customerAdmin.dto';
import { customerAdmin } from './schema/customerAdmin.schema';


@Injectable()
export class CustomerAdminService {
  
    constructor(@InjectModel(customerAdmin.name) private customerAdminModel: Model<customerAdmin>) { }
   
    async createCustomerAdmin(req: customerAdminDto) {
        try {
            const customerAdminKeys = await this.customerAdminModel.create(req)
            if (customerAdminKeys) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "Thank you for registering the formType",
                    data: {
                        customerAdminKeys: {
                            
                            firstName: customerAdminKeys.firstName,
                            Email: customerAdminKeys.Email,
                            phoneNumber: customerAdminKeys.phoneNumber
                            
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

}
