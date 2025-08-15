import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { Book } from '../books/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Author, Book])],
  providers: [AuthorService],
  controllers: [AuthorController],
})
export class AuthorModule {}
