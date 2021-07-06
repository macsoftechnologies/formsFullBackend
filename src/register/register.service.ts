import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { appRegisterDto, AppUserLogin, DeleteUserDto, updateUser } from './dto/register.dto';
import { registerModule } from './register.module';
import { AppUsers } from './schema/register.schema';

@Injectable()
export class RegisterService {
    constructor(@InjectModel(AppUsers.name) private userModel: Model<AppUsers>) { }

    async Create(req: appRegisterDto) {

        try {
            // const loginRes = await this.userModel.findOne({ $or: [{ Email: req.Email }, { Mobile: req.MobileNum }] })

            // if (loginRes) {
            //     return {
            //         statusCode: HttpStatus.CONFLICT,
            //         message: `User Already Exits with ${loginRes.Email} and ${loginRes.MobileNum}`
            //     }
            // }

            const registerRes = await this.userModel.create(req)
            if (registerRes) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "Registered SuccessFully",
                    data: {
                        authentication: {
                            UserId: registerRes.UserId,
                            Email: registerRes.Email,
                            FirstName: registerRes.FirstName,
                            LastName: registerRes.LastName
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
 
    async UsersList() {
        try {

            const userResponse = await this.userModel.find()
            console.log(userResponse)
            if (userResponse) {
                return {
                    StatusCode: HttpStatus.OK,
                    Message: 'List of Users',
                    Data: {
                        UserDetails: userResponse
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
        async updateUser(body: appRegisterDto) {
            try {
                 console.log(body, "body............")
                
            const updateRes = await this.userModel.updateOne({UserId : body.UserId} ,{$set : {Email : body.Email, FirstName: body.FirstName, LastName: body.LastName}})
                //const updateRes = await this.userModel.updateOne({ UserId: body.UserId })
                 console.log(updateRes, "update,,res")
                if (updateRes.nModified == 1) {
                    return {
                        StatusCode: HttpStatus.OK,
                        Message: "User Updated SuccessFully"
                    }
                }
                return {
                    StatusCode: HttpStatus.BAD_REQUEST,
                    Message: "Updated Failed"
                }
            } catch (error) {
                return {
                    StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    Message: error.message
                }
            }
          }

 
          async delete(body: DeleteUserDto) {
            try {
    
                  console.log(body)
                const deleteRes = await this.userModel.deleteOne({UserId:body.UserId});
            console.log(deleteRes, "deleteRes...")
    
                if (deleteRes.n == 1) {
                    return {
                        statusCode: HttpStatus.OK,
                        message: 'User deleted successfully',
                
                    };
                }
                return {
                    StatusCode: HttpStatus.BAD_REQUEST,
                    Message: "User deletion Failed"
                }
                
            } catch (error) {
                let error_response = {
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    data: null,
                    message: error,
                };
                return error_response;
            }
    
        }
    
    }
    // async Login(req: AppUserLogin) {
    //     try {

    //         const loginRes = await this.userModel.findOne({ $or: [{ Email: req.Email }, { MobileNum: req.MobileNum }] }).lean()
    //         if (loginRes) {
    //             if (loginRes.Password === req.Password) {

    //                 return {
    //                     statusCode: HttpStatus.OK,
    //                     message: "Login SuccessFully",
    //                     authentication: {
    //                         UserId: loginRes.UserId,
    //                         Email: loginRes.Email
    //                     }
    //                 }
    //             }

    //             return {
    //                 statusCode: HttpStatus.UNAUTHORIZED,
    //                 message: "Invalid Password"
    //             }

    //         }
    //         return {
    //             statusCode: HttpStatus.NOT_FOUND,
    //             message: "User Not Found"

    //         }
    //     } catch (error) {
    //         return {
    //             statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    //             message: error.message,
    //         };
    //     }
    // }

