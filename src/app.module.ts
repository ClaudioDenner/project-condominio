import { Module } from '@nestjs/common';
import { HousingsModule } from './housings/housings.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Housing } from './housings/entities/housing.entity';
import { Locations } from './housings/entities/locations.entity';
import { RequestsModule } from './requests/requests.module';
import { FinancesModule } from './finances/finances.module';
import { Finance } from './finances/entities/finance.entity';
import { Request } from './requests/entities/request.entity';
import { NoticesModule } from './notices/notices.module';
import { PeoplesModule } from './peoples/peoples.module';
import { Peoples } from './peoples/entities/people.entity';

@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_ROOT,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Housing, Locations,Finance, Request, Peoples],
    synchronize: true,
  }),
  HousingsModule,
  AuthModule,
  RequestsModule,
  FinancesModule,
  NoticesModule,
  PeoplesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
