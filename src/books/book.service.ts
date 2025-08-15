import { ConflictException, Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { Repository, In, MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Author } from '../authors/entities/author.entity';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { IBook, IBookAVG } from './interface/book.interface';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private readonly bookRepo: MongoRepository<Book>,
    @InjectRepository(Author) private readonly authorRepo: MongoRepository<Author>,
  ) { }

  async create(dto: CreateBookDto): Promise<Book> {
    // Validar que el campo title no exista sin tener en cuenta mayúsculas o minúsculas
    const existingTitle = await this.bookRepo.findOneBy({
      title: {
        $regex: `^${dto.title.trim()}$`,
        $options: 'i',
      },
    });

    if (existingTitle) {
      throw new ConflictException(`El titulo con el nombre "${dto.title}" ya existe`);
    }
    const book = this.bookRepo.create({
      ...dto,
      authorIds: dto.authorIds.map((id) => new ObjectId(id)),
    });

    const savedBook = await this.bookRepo.save(book);

    // Actualizar los autores para incluir este libro
    for (const authorId of dto.authorIds) {
      const author = await this.authorRepo.findOneBy({ id: new ObjectId(authorId) });
      if (author) {
        author.bookIds = [...(author.bookIds || []), savedBook.id];
        await this.authorRepo.save(author);
      }
    }

    return savedBook;
  }

  async findAll(): Promise<IBook[]> {
    const books = await this.bookRepo.find();
    const result = [];
    for (const book of books) {
      const authors = await this.authorRepo.findByIds(book.authorIds);
      delete book.authorIds; // quitar el campo authorIds de lista de libros
      if (authors.length) {
        result.push({ ...book, authors });
      }
    }

    return result;
  }

  async getAveragePages(): Promise<IBookAVG[]> {
    const books = await this.bookRepo.find();
    return books.map((book) => ({
      id: book.id.toString(),
      title: book.title,
      chapters: book.chapters,
      pages: book.pages,
      avg: parseFloat((book.pages / book.chapters).toFixed(2)),
    }));
  }
}
