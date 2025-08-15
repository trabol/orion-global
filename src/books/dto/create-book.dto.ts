import {
  IsString,
  IsInt,
  IsArray,
  ArrayNotEmpty,
  ArrayMinSize,
  IsMongoId,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({
    example: 'El Principito',
    description: 'Título del libro',
  })
  @IsString()
  @IsNotEmpty({ message: 'El título es obligatorio' })
  title: string;

  @ApiProperty({
    example: 27,
    description: 'Cantidad de capítulos',
  })
  @IsInt({ message: 'Los capítulos deben ser un número entero' })
  @IsNotEmpty({ message: 'La cantidad de capítulos es obligatoria' })
  chapters: number;

  @ApiProperty({
    example: 100,
    description: 'Cantidad de páginas',
  })
  @IsInt({ message: 'Las páginas deben ser un número entero' })
  @IsNotEmpty({ message: 'La cantidad de páginas es obligatoria' })
  pages: number;

  @ApiProperty({
    example: ['64f07ac7d5b54c1e0ce3eb20'],
    description: 'IDs de autores asociados (formato MongoID de 24 caracteres)',
    type: [String],
  })
  @IsArray({ message: 'authorIds debe ser un arreglo' })
  @ArrayNotEmpty({ message: 'Debe proporcionar al menos un ID de autor' })
  @ArrayMinSize(1)
  @IsMongoId({ each: true, message: 'Cada ID debe tener formato válido de MongoID (24 caracteres)' })
  @IsNotEmpty({ message: 'authorIds es obligatorio' })
  authorIds: string[];
}
