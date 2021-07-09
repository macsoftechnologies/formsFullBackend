import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose";
import { formsManage } from "src/forms-manage/schema/formsManage.schema";
import { MailController } from "./mail.controller";
import { MailService } from "./mail.service";
@Module({
   // imports:[MongooseModule.forFeature([{name :formsManage.name , schema : formsManageSchema}]),],
    providers: [MailService],
    controllers: [MailController]
  })
  export class mailModule {}