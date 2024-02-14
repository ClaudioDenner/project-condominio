import { Module } from '@nestjs/common';
import { HousingsService } from './housings.service';
import { HousingsController } from './housings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Housing } from './entities/housing.entity';
import { Locations } from './entities/locations.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Housing, Locations])],
  controllers: [HousingsController],
  providers: [HousingsService],
})
export class HousingsModule {}
