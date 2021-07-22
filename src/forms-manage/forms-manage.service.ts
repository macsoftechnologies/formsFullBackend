import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { formsManageDto } from './dto/formsManage.dto';
import { formsManage } from './schema/formsManage.schema';

@Injectable()
export class FormsManageService {
    constructor(@InjectModel(formsManage.name) private formsManageModel: Model<formsManage>){}

    async formsManage(req: formsManageDto) {
     try {
      const reqFormsManage = await this.formsManageModel.create(req)
      if(reqFormsManage){
          return{
              statusCode: HttpStatus.OK,
              message: 'User Access Provided',
              data: {
                  FormsManageResponse: {
                    
                      Allow :reqFormsManage.AllowStatus,
                      Values: reqFormsManage.Values
                  }
              }
          }
      }
       return {
            statusCode: HttpStatus.BAD_REQUEST,
            message:"Invalid Request"
       }
        }catch(error){
            return{
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            };
        }
    }
    
    async formsList() {
        try {

            const formsResponse = await this.formsManageModel.find()
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
