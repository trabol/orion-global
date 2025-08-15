import { Controller, Post, Body, Get } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BookResponseDto } from './dto/create-book.response.dto';
import { BookAvgResponseDto } from './dto/list-book-avg.response.dto';

@ApiTags('Books')
@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo libro' })
  @ApiResponse({ status: 201, description: 'Libro creado exitosamente' ,type: BookResponseDto,})
  
  create(@Body() dto: CreateBookDto) {
    return this.bookService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los libros con sus autores' })
  @ApiResponse({ status: 200, description: 'Lista de libros' ,type: BookResponseDto ,isArray: true})
  findAll() {
    return this.bookService.findAll();
  }

  @Get('average-pages')
  @ApiOperation({ summary: 'Obtener promedio de páginas por capítulo' })
  @ApiResponse({ status: 200, description: 'Promedio calculado por libro', type: BookAvgResponseDto, isArray: true })
  getAverages() {
    return this.bookService.getAveragePages();
  }
}
