import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose";
import { urlSelect, urlSelectSchema } from "./schema/urlSelect.schema";
import { UrlSelectController } from "./url-select.controller";
import { UrlSelectService } from "./url-select.service";
@Module({
    imports:[MongooseModule.forFeature([{name :urlSelect.name , schema : urlSelectSchema}]),
    ],
    providers: [UrlSelectService],
    controllers: [UrlSelectController]
  })
  export class UrlSelectModule {}