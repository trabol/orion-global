import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthorResponseDto } from './dto/create-author.response.dto';

@ApiTags('Authors')
@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo autor' })
  @ApiResponse({ status: 201, description: 'Autor creado exitosamente',type : AuthorResponseDto, })
  create(@Body() dto: CreateAuthorDto) {
    return this.authorService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los autores con sus libros' })
  @ApiResponse({ status: 200, description: 'Lista de autores' ,type : AuthorResponseDto, isArray: true})
  findAll() {
    return this.authorService.findAll();
  }
}
