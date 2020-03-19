class BookList {
  constructor() {
    this.books = {};
    this.count = 0;
  }

  addBook(book) {
    this.books[book.id] = book;
    return ++this.count;
  }

  deleteBook(id) {
    const deletedBook = this.books[id];
    delete this.books[id];
    this.count -= 1;
    return deletedBook;
  }

  deleteAllBooks() {
    this.books = {};
    this.count = 0;
  }
}

module.exports = BookList;