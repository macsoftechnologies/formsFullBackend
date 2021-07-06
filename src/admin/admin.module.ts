import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { Admin, AdminSchema } from './schema/admin.schema';

@Module({
  imports:[MongooseModule.forFeature([{name :Admin.name , schema : AdminSchema}]),
  ],
  providers: [AdminService],
  controllers: [AdminController]
})
export class AdminModule {}
