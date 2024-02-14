import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateHousingDto } from './dto/create-housing.dto';
import { UpdateHousingDto } from './dto/update-housing.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Housing } from './entities/housing.entity';
import { Res } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class HousingsService {
  constructor(@InjectRepository(Housing) private housingRepository:Repository<Housing>){}
  
  async create(createHousingDto: CreateHousingDto) {
    const {owner_full_name, owner_birthday, owner_cpf} = createHousingDto
   
      const data = this.housingRepository.create({
        owner_full_name, 
        owner_birthday, 
        owner_cpf
      })

      try{
        const save = await this.housingRepository.save(data)
        return {"status":201, "statusText":"Registro Inserido com sucesso!"}
      }catch(error){
        console.log(error)
        throw new BadRequestException(error.sqlMessage)
      }




  }

  async findAll() {
    try{
      const query = await this.housingRepository.find()
      return query

    }catch(error){
      console.log(error)
      throw new InternalServerErrorException('Parece que algo deu errado em sua consulta, tente novamente mais tarde')
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} housing`;
  }

  update(id: number, updateHousingDto: UpdateHousingDto) {
    return `This action updates a #${id} housing`;
  }

  async remove(id: number) {
    try{
      const query  = await this.housingRepository.createQueryBuilder()
      .delete()
      .where("id = :id", { id})
      .execute()
      console.log(query)
      if(query.affected == 0) throw new Error('Nenhum registro removido')
      return {"status":200, "statusText":"Registro apagado com sucesso!"}
    }catch(error){
      throw new BadRequestException(error.message)
    }
  }
}
