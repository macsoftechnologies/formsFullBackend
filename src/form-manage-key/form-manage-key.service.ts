import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Email } from 'src/users/schema/users.schema';
import { formManageKeyDto } from './dto/formManageKey.dto';
import { EmailStatus, formManageKey } from './schema/formManageKey.schema';

@Injectable()
export class FormManageKeyService {

  
    constructor(@InjectModel(formManageKey.name) private FormManageKeyModel: Model<formManageKey>) { }
   
    async createKey(req: any[]) {
        try {
            const formManageKeys = await this.FormManageKeyModel.create(req)
            if (formManageKeys) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "Thank you for registering the formType",
                    data: {
                        formManageKeys: {
                            
                            firstName: formManageKeys.FirstName,
                            Email: formManageKeys.Email
                            
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

    async formsList(Email: any) {
        try {

            const formsResponse = await await this.FormManageKeyModel.find({ Email: Email })
            console.log(formsResponse)
            if (formsResponse) {
                return {
                    StatusCode: HttpStatus.OK,
                    Message: 'List of Forms',
                    Data: {
                        UserDetails: formsResponse
                    }

                }
            }
            return {
                StatusCode: HttpStatus.BAD_REQUEST,
                Message: "InValid Request"
            }

        } catch (error) {
            return {
                StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                Message: error

            }
        }
    }
 
}
