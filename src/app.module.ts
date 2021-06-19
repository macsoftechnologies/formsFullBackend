import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { formTypeModule } from './form-type/formType.module';
import { MongooseConfigService } from './_common/configs/mongoose.config';
import { customerAdminModule } from './customer-admin/customerAdmin.module';
import { companyModule } from './company/company.module';
import { usersModule } from './users/users.module';
import { formsManageModule } from './forms-manage/formsManage.module';

@Module({
  imports: [ MongooseModule.forRootAsync({useClass : MongooseConfigService}),
             formTypeModule, 
             customerAdminModule,
             companyModule,
            usersModule,
            formsManageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
