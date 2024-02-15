import { Module } from '@nestjs/common';
import { HousingsService } from './housings.service';
import { HousingsController } from './housings.controller';


@Module({
  controllers: [HousingsController],
  providers: [HousingsService],
})
export class HousingsModule {}
