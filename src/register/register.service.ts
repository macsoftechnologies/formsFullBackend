import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { appRegisterDto, AppUserLogin } from './dto/register.dto';
import { AppUsers } from './schema/register.schema';

@Injectable()
export class RegisterService {
    constructor(@InjectModel(AppUsers.name) private userModel: Model<AppUsers>) { }

    async Create(req: appRegisterDto) {

        try {
            const loginRes = await this.userModel.findOne({ $or: [{ Email: req.Email }, { Mobile: req.MobileNum }] })

            if (loginRes) {
                return {
                    statusCode: HttpStatus.CONFLICT,
                    message: `User Already Exits with ${loginRes.Email} and ${loginRes.MobileNum}`
                }
            }

            const registerRes = await this.userModel.create(req)
            if (registerRes) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "Registered SuccessFully",
                    data: {
                        authentication: {
                            UserId: registerRes.UserId,
                            Email: registerRes.Email,
                            MobileNum: registerRes.MobileNum
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

    async Login(req: AppUserLogin) {
        try {

            const loginRes = await this.userModel.findOne({ $or: [{ Email: req.Email }, { MobileNum: req.MobileNum }] }).lean()
            if (loginRes) {
                if (loginRes.Password === req.Password) {

                    return {
                        statusCode: HttpStatus.OK,
                        message: "Login SuccessFully",
                        authentication: {
                            UserId: loginRes.UserId,
                            Email: loginRes.Email
                        }
                    }
                }

                return {
                    statusCode: HttpStatus.UNAUTHORIZED,
                    message: "Invalid Password"
                }

            }
            return {
                statusCode: HttpStatus.NOT_FOUND,
                message: "User Not Found"

            }
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            };
        }
    }
}
