import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FormManageKeyController } from "./form-manage-key.controller";
import { FormManageKeyService } from "./form-manage-key.service";
import { formManageKey, formManageKeySchema } from "./schema/formManageKey.schema";

@Module({
    imports:[MongooseModule.forFeature([{name :formManageKey.name , schema : formManageKeySchema}]),
],  
 providers:[FormManageKeyService],
 controllers:[FormManageKeyController]
})
export class formManageKeyModule {}