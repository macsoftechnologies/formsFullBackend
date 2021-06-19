import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose";
import { users, usersSchema } from "./schema/users.schema";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
@Module({
    imports:[MongooseModule.forFeature([{name :users.name , schema : usersSchema}]),
    ],
    providers: [UsersService],
    controllers: [UsersController]
  })
  export class usersModule {}
  