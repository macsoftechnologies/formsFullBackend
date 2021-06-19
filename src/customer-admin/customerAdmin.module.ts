import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CustomerAdminController } from "./customer-admin.controller";
import { CustomerAdminService } from "./customer-admin.service";
import { customerAdmin, customerAdminSchema } from "./schema/customerAdmin.schema";

@Module({
    imports:[MongooseModule.forFeature([{name :customerAdmin.name , schema : customerAdminSchema}]),
],  
 providers:[CustomerAdminService],
 controllers:[CustomerAdminController]
})
export class customerAdminModule {}