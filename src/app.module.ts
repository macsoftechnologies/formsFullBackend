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


import { UserDataService } from './user-data/user-data.service';
import { userDataModule } from './user-data/userData.module';
import { AdminService } from './admin/admin.service';
import { AdminController } from './admin/admin.controller';
import { AdminModule } from './admin/admin.module';
import { formManageKeyModule } from './form-manage-key/formManageKey.module';
import { UrlSelectModule } from './url-select/urlSelect.module';
import { GlobalValuesModule } from './global-values/globalValues.module';
import { ApplogsService } from './applogs/applogs.service';
import { ApplogsModule } from './applogs/applogs.module';


@Module({
  imports: [ MongooseModule.forRootAsync({useClass : MongooseConfigService}),
             formTypeModule, 
             customerAdminModule,
             companyModule,
            usersModule,
            formsManageModule,
            registerModule,
          userDataModule,
        AdminModule, 
        GlobalValuesModule,
      formManageKeyModule,
    UrlSelectModule,
    ApplogsModule],
  controllers: [AppController, LoginController],
  providers: [AppService, LoginService],
})
export class AppModule {}
