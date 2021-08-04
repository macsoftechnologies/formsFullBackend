import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplogsModule } from 'src/applogs/applogs.module';
import { ApplogsService } from 'src/applogs/applogs.service';
import { Applogs, ApplogsSchema } from 'src/applogs/schema/applogs.schema';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { Admin, AdminSchema } from './schema/admin.schema';

@Module({
  imports:[MongooseModule.forFeature([{name :Admin.name , schema : AdminSchema}]),
    MongooseModule.forFeature([{name :Applogs.name , schema : ApplogsSchema}])],
  
  providers: [AdminService, ApplogsService],
  controllers: [AdminController]
})
export class AdminModule {}
