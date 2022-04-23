import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { create } from 'domain';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  // in NestJS, if you want something you have to ask for it!
  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }
  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id:${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `This will patch a movie with the id:${movieId}`;
  }
}
