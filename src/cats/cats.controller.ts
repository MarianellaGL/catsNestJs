import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cats } from './cats.interface';
import { CreateCatDto } from 'src/dto/create-cats.dto';
import { CatsService } from './cats.service';

@Controller('/cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cats[]> {
    return this.catsService.findAll();
  }
}
