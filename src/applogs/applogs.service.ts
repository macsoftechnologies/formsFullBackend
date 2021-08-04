
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ApplogsDto } from './dto/applogs.dto';
import { Applogs } from './schema/applogs.schema';


@Injectable()
export class ApplogsService {
    constructor(@InjectModel(Applogs.name) private AppLogs: Model<Applogs>) { }
      
    async createLogs(req: ApplogsDto) {
        try {
            const reqLogs = await this.AppLogs.create(req)
            if (reqLogs) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "Log Added",
                    data: {
                        UserRatingResponse: {
                            
                            FormResponse: reqLogs.id,
                            
                            
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
