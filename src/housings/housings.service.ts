import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateHousingDto } from './dto/create-housing.dto';
import { UpdateHousingDto } from './dto/update-housing.dto';



@Injectable()
export class HousingsService {
  
  async create(createHousingDto: CreateHousingDto) {
    /*
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


*/

  }

  async findAll() {
   /*
    try{
      const query = await this.housingRepository.find()
      return query

    }catch(error){
      console.log(error)
      throw new InternalServerErrorException('Parece que algo deu errado em sua consulta, tente novamente mais tarde')
    }
    */
  }

  async findOne(id: number) {
   /*
    try{
      const query = await this.housingRepository.find({ where: {id}})
      return query

    }catch(error){
      console.log(error)
      throw new InternalServerErrorException('Parece que algo deu errado em sua consulta, tente novamente mais tarde')
    }
    */
  }

  async update(id: number, updateHousingDto: UpdateHousingDto) {
    /*
    const {owner_full_name, owner_birthday, owner_cpf} = updateHousingDto

    try{
      const query = await this.housingRepository
      .createQueryBuilder()
      .update()
      .set({
        owner_full_name,
        owner_birthday, 
        owner_cpf
      })
      .where("id = :id", { id })
      .execute()

      return {"status":200, "statusText":"Registro Alterado com sucesso!"}

    }catch(error){
      console.log(error)
      throw new InternalServerErrorException('Parece que algo deu errado em sua consulta, tente novamente mais tarde')
    }
    */
  }

  async remove(id: number) {
    /*
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
    */
  }

  async findAllFull() {
   /*
    try{
      const query = await this.housingRepository
      .createQueryBuilder('housings')
      .leftJoinAndSelect(Peoples,'people','people.housingId')
      .getMany()
      //.find({relations:{peoples:true, requests:true, finances:true, location:true }})
      return query

    }catch(error){
      console.log(error)
      throw new InternalServerErrorException('Parece que algo deu errado em sua consulta, tente novamente mais tarde')
    }
    */
  }
}
