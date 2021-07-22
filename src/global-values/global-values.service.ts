import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GlobalValuesDto } from './dto/globalValues.dto';
import { GlobalValues } from './schema/globalValues.schema';

@Injectable()
export class GlobalValuesService {    constructor(@InjectModel(GlobalValues.name) private urlSelectModel: Model<GlobalValues>) { }
   
async formTypeReq(req: GlobalValuesDto) {
    try {
        const urlData = await this.urlSelectModel.create(req)
        if (urlData) {
            return {
                statusCode: HttpStatus.OK,
                message: "Thank you for registering the formType",
                data: {
                    globalResponse: {
                        
                        FormResponse: urlData.allow
                        
                        
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
