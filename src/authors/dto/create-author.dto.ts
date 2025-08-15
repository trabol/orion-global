import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {
  @ApiProperty({ example: 'Gabriel García Márquez', description: 'Nombre del autor' })
  @IsString()
  @IsNotEmpty({ message: 'Nombre del autor es obligatorio' })
  name: string;
}
