
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ApplogsService } from "./applogs.service";
import { Applogs, ApplogsSchema } from "./schema/applogs.schema";

@Module({
    imports:[MongooseModule.forFeature([{name :Applogs.name , schema : ApplogsSchema}]),
],  
 providers:[ ApplogsService],
 
})
export class ApplogsModule {}