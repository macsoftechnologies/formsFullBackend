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
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { registerModule } from './register/register.module';

@Module({
  imports: [ MongooseModule.forRootAsync({useClass : MongooseConfigService}),
             formTypeModule, 
             customerAdminModule,
             companyModule,
            usersModule,
            formsManageModule,
            registerModule],
  controllers: [AppController, LoginController],
  providers: [AppService, LoginService],
})
export class AppModule {}
