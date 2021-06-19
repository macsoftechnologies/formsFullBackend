import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CompanyController } from "./company.controller";
import { CompanyService } from "./company.service";
import { Company, CompanySchema } from "./schema/company.schema";

@Module({
    imports:[MongooseModule.forFeature([{name: Company.name , schema: CompanySchema}])
],
 providers:[CompanyService],
 controllers:[CompanyController]
})
export class companyModule{}