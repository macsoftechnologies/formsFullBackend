import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose";
import { FormsManageController } from "./forms-manage.controller";
import { FormsManageService } from "./forms-manage.service";
import { formsManage, formsManageSchema } from "./schema/formsManage.schema";
@Module({
    imports:[MongooseModule.forFeature([{name :formsManage.name , schema : formsManageSchema}]),
    ],
    providers: [FormsManageService],
    controllers: [FormsManageController]
  })
  export class formsManageModule {}