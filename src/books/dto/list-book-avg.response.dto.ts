// dto/book-avg.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IBookAVG } from '../interface/book.interface';

export class BookAvgResponseDto implements IBookAVG {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  chapters: number;

  @ApiProperty()
  pages: number;

  @ApiProperty({ description: 'Promedio de páginas por capítulo con dos decimales' })
  avg: number;
}