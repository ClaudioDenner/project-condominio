import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HousingsService } from './housings.service';
import { CreateHousingDto } from './dto/create-housing.dto';
import { UpdateHousingDto } from './dto/update-housing.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('/housings')
@Controller('housings')
export class HousingsController {
  constructor(private readonly housingsService: HousingsService) {}

  @Post()
  create(@Body() createHousingDto: CreateHousingDto) {
    return this.housingsService.create(createHousingDto);
  }

  @Get()
  findAll() {
    return this.housingsService.findAll();
  }

  @Get('full')
  findAllFull() {
    return this.housingsService.findAllFull();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.housingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHousingDto: UpdateHousingDto) {
    return this.housingsService.update(+id, updateHousingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.housingsService.remove(+id);
  }
}
