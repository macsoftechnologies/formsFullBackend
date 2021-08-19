import { Injectable } from '@nestjs/common';
import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';
import { loadEnvironmentVariables } from './loader';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    loadEnvironmentVariables()
    
    return {
      // uri:"",
      uri:'mongodb://formfuladmin:Panther1%40%23@3.80.84.74:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false',
      useCreateIndex: true,
      keepAlive: true,
      useNewUrlParser: true,
      autoIndex: true,
      poolSize: 10,
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
  }
}
