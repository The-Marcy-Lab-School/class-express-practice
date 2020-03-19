class Book {
  constructor(title, author, imageURL, description) {
    this.id = ++Book.count;
    this.title = title;
    this.author = author;
    this.description = description;
    this.imageURL = imageURL;
    this.dateAdded = new Date();
  }
}

Book.count = 0;

module.exports = Book; 