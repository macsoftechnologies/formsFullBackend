import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose";
import { FormTypeController } from "./form-type.controller";
import { FormTypeService } from "./form-type.service";
import { formType, formTypeSchema } from "./schema/formType.schema";
@Module({
    imports:[MongooseModule.forFeature([{name :formType.name , schema : formTypeSchema}]),
    ],
    providers: [FormTypeService],
    controllers: [FormTypeController]
  })
  export class formTypeModule {}
  