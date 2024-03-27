import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from './config/config';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`./src/config/env/.env.${process.env.NODE_ENV.trim()}`],
      isGlobal: true,
      load: [config]
    }),
    MongooseModule.forRootAsync({
      inject: [ ConfigService ],
      useFactory: (appConfigService: ConfigService) => {
        const options: MongooseModuleOptions = {
          uri: appConfigService.get<string>('mongodb.database.connectionString'),
        };
        return options;
      },
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
 
}
