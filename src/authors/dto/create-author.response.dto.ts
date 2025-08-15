import { ApiProperty } from '@nestjs/swagger';
import { Iauthor } from '../interface/authos.interface';

export class AuthorResponseDto implements Iauthor{
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}
