import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { In, MongoRepository } from 'typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Book } from '../books/entities/book.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author) private readonly authorRepo: MongoRepository<Author>,
    @InjectRepository(Book) private readonly bookRepo: MongoRepository<Book>,
  ) {}

  async create(dto: CreateAuthorDto): Promise<Author> {
    // Validar que el campo name no exista sin tener en cuenta mayúsculas o minúsculas
    const existingAuthor = await this.authorRepo.findOneBy({
      name: {
        $regex: `^${dto.name.trim()}$`,
        $options: 'i',
      },
    });

    if (existingAuthor) {
      throw new ConflictException(`El autor con el nombre "${dto.name}" ya existe`);
    }
    const author = this.authorRepo.create({ ...dto});
    return this.authorRepo.save(author);
  }

  async findAll(): Promise<any[]> {
    const authors = await this.authorRepo.find();
    const result = [];

    for (const author of authors) {
      const books = await this.bookRepo.find({
        where: { id: author.bookIds }
      });
      result.push({ ...author, books });
    }

    return result;
  }
}
