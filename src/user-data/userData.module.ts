import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserData, UserDataSchema } from './schema/userData.schema';
import { UserDataController } from './user-data.controller';
import { UserDataService } from './user-data.service';



@Module({
  imports:[MongooseModule.forFeature([{name :UserData.name , schema : UserDataSchema}]),
  ],
  providers: [UserDataService],
  controllers: [UserDataController]
})
export class userDataModule {}