// dto/book-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { AuthorResponseDto } from '../../authors/dto/create-author.response.dto';
import { IBook } from '../interface/book.interface';

export class BookResponseDto implements  IBook{
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  chapters: number;

  @ApiProperty()
  pages: number;

  @ApiProperty({ type: [AuthorResponseDto] })
  authors: AuthorResponseDto[];
}
