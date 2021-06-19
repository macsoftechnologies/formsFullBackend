import { Injectable, Post, HttpStatus, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeleteUserDto, usersDto } from './dto/users.dto';
import { users } from './schema/users.schema';



@Injectable()
export class UsersService {
  
    constructor(@InjectModel(users.name) private usersModel: Model<users>) { }
   
    async createUser(req: usersDto) {
        try {
            const userRes = await this.usersModel.create(req)
            if (userRes) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "Thank you for registering",
                    data: {
                        UserRegisteringResponse: {
                            
                            UserId: userRes.UserId,
                            UserEmail: userRes.Email,
                            UserStatus: userRes.UserStatus
                            
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

    async delete(body: DeleteUserDto) {
        try {

              console.log(body)
            const deleteRes = await this.usersModel.deleteOne({UserId:body.UserId});
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

    async UserDetails(Email: string) {
        try {

            const userResponse = await this.usersModel.findOne({ Email: Email })
            console.log(userResponse)
            if (userResponse) {
                return {
                    StatusCode: HttpStatus.OK,
                    Message: 'User Details',
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


    async UsersList(Company_Id: string) {
        try {

            const userResponse = await this.usersModel.find({ Company_Id: Company_Id})
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


}
