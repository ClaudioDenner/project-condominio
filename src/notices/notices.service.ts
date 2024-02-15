import { Injectable } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { InternalServerErrorException, BadRequestException } from '@nestjs/common';
@Injectable()
export class NoticesService {
  constructor(private prisma: PrismaService) {}

  create(createNoticeDto: CreateNoticeDto) {
    return 'This action adds a new notice';
  }

  async findAll() {
    try{
      const query = await this.prisma.notices.findMany()
      return query
    }catch(error){
      console.log(error)
      throw new InternalServerErrorException()
    }

  }

  async findOne(id: number) {
    try{
      const query = await this.prisma.notices.findUnique({where:{id}})
      return query
    }catch(error){
      console.log(error)
      throw new BadRequestException()
    }
  }

  update(id: number, updateNoticeDto: UpdateNoticeDto) {
    return `This action updates a #${id} notice`;
  }

  remove(id: number) {
    return `This action removes a #${id} notice`;
  }
}
