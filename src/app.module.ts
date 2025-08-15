// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books/entities/book.entity';
import { Author } from './authors/entities/author.entity';
import { BookModule } from './books/book.module';
import { AuthorModule } from './authors/author.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que las variables estén disponibles en todo el proyecto
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mongodb',
        url: configService.get<string>('MONGO_URL'),
        synchronize: true,
        entities: [Book, Author],
      }),
    }),

    BookModule,
    AuthorModule,
  ],
})
export class AppModule {}

