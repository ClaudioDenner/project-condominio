import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeoplesService } from './peoples.service';
import { CreatePeopleDto } from './dto/create-people.dto';
import { UpdatePeopleDto } from './dto/update-people.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('/peoples')
@Controller('peoples')
export class PeoplesController {
  constructor(private readonly peoplesService: PeoplesService) {}

  @Post()
  create(@Body() createPeopleDto: CreatePeopleDto) {
    return this.peoplesService.create(createPeopleDto);
  }

  @Get()
  findAll() {
    return this.peoplesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peoplesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeopleDto: UpdatePeopleDto) {
    return this.peoplesService.update(+id, updatePeopleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peoplesService.remove(+id);
  }
}