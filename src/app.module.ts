import { Module } from '@nestjs/common';
import { HousingsModule } from './housings/housings.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RequestsModule } from './requests/requests.module';
import { FinancesModule } from './finances/finances.module';
import { NoticesModule } from './notices/notices.module';
import { PeoplesModule } from './peoples/peoples.module';
import { PrismaService } from './prisma/prisma.service';


@Module({
  imports: [ConfigModule.forRoot(),
  HousingsModule,
  AuthModule,
  RequestsModule,
  FinancesModule,
  NoticesModule,
  PeoplesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
