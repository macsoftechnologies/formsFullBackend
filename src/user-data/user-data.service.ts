import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userDataDto } from './dto/userData.dto';
import { UserData } from './schema/userData.schema';

@Injectable()
export class UserDataService {

    constructor(@InjectModel(UserData.name) private userDataModel: Model<UserData>) { }

    async Create(req: userDataDto) {

        try {
           
            const registerRes = await this.userDataModel.create(req)
            if (registerRes) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "Registered SuccessFully",
                    data: {
                        authentication: {
                            Email: registerRes.email,
                            Name: registerRes.name,
                            
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