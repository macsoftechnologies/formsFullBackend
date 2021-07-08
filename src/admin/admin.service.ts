import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdminLogin, AdminRegister } from './dto/admin.dto';
import { Admin } from './schema/admin.schema';

@Injectable()
export class AdminService {

    constructor(@InjectModel(Admin.name) private adminModel: Model<Admin>) { }

    async Create(req: AdminRegister) {

        try {
            // const loginRes = await this.userModel.findOne({ $or: [{ Email: req.Email }, { Mobile: req.MobileNum }] })

            // if (loginRes) {
            //     return {
            //         statusCode: HttpStatus.CONFLICT,
            //         message: `User Already Exits with ${loginRes.Email} and ${loginRes.MobileNum}`
            //     }
            // }

            const registerRes = await this.adminModel.create(req)
            if (registerRes) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "Registered SuccessFully",
                    data: {
                        authentication: {
                            Email: registerRes.Email,
                            Password: registerRes.Password
                            
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

    async Login(req: AdminLogin) {
    try {

        const loginRes = await this.adminModel.findOne({ $or: [{ Email: req.Email }, { Password: req.Password }] }).lean()
        if (loginRes) {
            if (loginRes.Password === req.Password) {

                return {
                    statusCode: HttpStatus.OK,
                    message: "Login SuccessFully",
                    authentication: {
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