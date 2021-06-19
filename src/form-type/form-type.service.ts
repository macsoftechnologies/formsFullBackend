import { Injectable, Post, HttpStatus, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { formTypeDto } from './dto/formType.dto';
import { formType } from './schema/formType.schema';


@Injectable()
export class FormTypeService {
  
    constructor(@InjectModel(formType.name) private formTypeModel: Model<formType>) { }
   
    async formTypeReq(req: formTypeDto) {
        try {
            const reqFormType = await this.formTypeModel.create(req)
            if (reqFormType) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "Thank you for registering the formType",
                    data: {
                        UserRatingResponse: {
                            
                            FormType: reqFormType.Form_Type,
                            Endpoint: reqFormType.Endpoint,
                            AddMore: reqFormType.AddMore
                            
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

    async formsList(Company_Name: string) {
        try {

            const formsResponse = await this.formTypeModel.find({ Company_Name: Company_Name})
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
