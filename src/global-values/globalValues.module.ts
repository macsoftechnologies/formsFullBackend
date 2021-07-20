import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose";
import { GlobalValuesController } from "./global-values.controller";
import { GlobalValuesService } from "./global-values.service";
import { GlobalValues, GlobalValuesSchema } from "./schema/globalValues.schema";

@Module({
    imports:[MongooseModule.forFeature([{name :GlobalValues.name , schema : GlobalValuesSchema}]),
    ],
    providers: [GlobalValuesService],
    controllers: [GlobalValuesController]
  })
  export class GlobalValuesModule {}