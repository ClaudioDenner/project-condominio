import { Injectable } from '@nestjs/common';
import { CreatePeopleDto } from './dto/create-people.dto';
import { UpdatePeopleDto } from './dto/update-people.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BadRequestException } from '@nestjs/common';
import { writeFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class PeoplesService {
  async create(createPeopleDto: CreatePeopleDto, file:Express.Multer.File) {

    const upload = await writeFile(join(__dirname, '../','../','storage','file.jpg'),file.buffer)
    console.log(join(__dirname, '../','../','storage','file.jpg'))
    console.log(upload)
    return {createPeopleDto, upload}


    /*
    const {full_name, housing, cpf, type} = createPeopleDto
   
      const data = this.peoplesRepository.create({
        full_name,
        cpf,
        type
      })

      try{
        const save = await this.peoplesRepository.save(data)
        return {"status":201, "statusText":"Registro Inserido com sucesso!"}
      }catch(error){
        console.log(error)
        throw new BadRequestException(error.sqlMessage)
      }
      */

  }

  findAll() {
    return `This action returns all peoples`;
  }

  findOne(id: number) {
    return `This action returns a #${id} people`;
  }

  update(id: number, updatePeopleDto: UpdatePeopleDto) {
    return `This action updates a #${id} people`;
  }

  remove(id: number) {
    return `This action removes a #${id} people`;
  }
}
