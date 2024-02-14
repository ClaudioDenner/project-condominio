import { Module } from '@nestjs/common';
import { PeoplesService } from './peoples.service';
import { PeoplesController } from './peoples.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Peoples } from './entities/people.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Peoples])],
  controllers: [PeoplesController],
  providers: [PeoplesService],
})
export class PeoplesModule {}
