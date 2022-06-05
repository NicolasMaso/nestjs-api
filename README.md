<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

 
## Description

This project is an API Rest that uses the following technologies:
- NestJS
- Typescript
- MySQL
- Sequelize

In this project the API make the CRUD (create, read, update, delete) operations with books as an example.

## Installation

```bash
$ npm install
```
## Configuring the database

You need to install MySQL (https://dev.mysql.com/downloads/installer/) and create your username and password to use MySQL CLI.
With the MySQL CLI, you need to create a database (use the command: create database name;), in my project the name of the database is library but you can create with the name you want, just need to adjust the variables in .env file.

## Configuring the .env

You have to create a .env file in the project directory root and configure the file with all variables showed below to make the connection with database work

- DB_USERNAME=username
- DB_PASSWORD=password
- DB_NAME=library
- DB_PORT=3306
- DB_HOST=localhost

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```
## Testing the routes

The only route of the application is called books and this route realize the CRUD operations.

### Creating a book

- URL: localhost:3000/books
- Method: POST
- Body: JSON
- This method only return the status code 201 - Created

Body example:
{
	"code": "01",
	"name": "Book 1",
	"price": 99.90
}

### Updating a book

- URL: localhost:3000/books
- Method: PUT
- Body: JSON

- This method return the number of affected rows

Body example:
{
	"id": 1,
	"code": "01",
	"name": "Book 1",
	"price": 39.90
}

### Removing a book

- URL: localhost:3000/books/id
- Method: DELETE

- You need to pass the id of the book in the URL. This method only return the status code 200 - OK

### List all books

- URL: localhost:3000/books
- Method: GET

- This method return the status code 200 - Ok and an array with all the books in the database.

### List one book

- URL: localhost:3000/books/id
- Method: GET

- You need to pass the id of the book in the URL. This method return the status code 200 - Ok and the book specified in the URL.
