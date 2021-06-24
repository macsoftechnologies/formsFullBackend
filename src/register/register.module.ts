import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { AppUsers, AppUsersSchema } from './schema/register.schema';



@Module({
  imports:[MongooseModule.forFeature([{name :AppUsers.name , schema : AppUsersSchema}]),
  ],
  providers: [RegisterService],
  controllers: [RegisterController]
})
export class registerModule {}
