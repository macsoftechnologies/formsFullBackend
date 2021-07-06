import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { userDataDto } from './dto/userData.dto';
import { UserDataService } from './user-data.service';

@Controller('user-data')
export class UserDataController {
 
    constructor(private userDataService: UserDataService) { }
    @Post()
    async create(@Body() req: userDataDto) {
        try {
            const result = await this.userDataService.Create(req)
            console.log("result", result);
            
            return result
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            };
        }
    }
}
