import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { urlSelectDto } from './dto/urlSelect.dto';
import { urlSelect } from './schema/urlSelect.schema';

@Injectable()
export class UrlSelectService {


  
    constructor(@InjectModel(urlSelect.name) private urlSelectModel: Model<urlSelect>) { }
   
    async formTypeReq(req: urlSelectDto) {
        try {
            const urlData = await this.urlSelectModel.create(req)
            if (urlData) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "Thank you for registering the formType",
                    data: {
                        UserRatingResponse: {
                            
                            FormResponse: urlData.urlValues
                            
                            
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