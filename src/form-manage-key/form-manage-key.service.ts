import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { formManageKeyDto } from './dto/formManageKey.dto';
import { formManageKey } from './schema/formManageKey.schema';

@Injectable()
export class FormManageKeyService {

  
    constructor(@InjectModel(formManageKey.name) private customerAdminModel: Model<formManageKey>) { }
   
    async createKey(req: any[]) {
        try {
            const customerAdminKeys = await this.customerAdminModel.create(req)
            if (customerAdminKeys) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "Thank you for registering the formType",
                    data: {
                        customerAdminKeys: {
                            
                            firstName: customerAdminKeys.FirstName,
                            Email: customerAdminKeys.Email,
                            
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
