/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Book } from './book.model';
import { BooksService } from './books.service';


@Controller('books')
export class BooksController {

  constructor(private booksService: BooksService) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.booksService.getAllBooks();
  }

  @Get(':id')
  async getBook(@Param() params): Promise<Book> {
    return this.booksService.getBook(params.id);
  }

  @Post()
  async createBook(@Body() Book : Book) {
    this.booksService.createBook(Book);
  }

  @Put()
  async updateBook(@Body() Book : Book): Promise<[number, Book[]]> {
    return this.booksService.updateBook(Book);
  }

  @Delete(':id')
  async deleteBook(@Param() params) {
    this.booksService.deleteBook(params.id);
  }
  
}
