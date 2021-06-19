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
                      Email: reqFormsManage.Email
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
 
}
