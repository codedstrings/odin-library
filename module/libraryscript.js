// export const myLibrary = [];
//constructor function (old approach)
// function Book(title, author, pageNo, isRead) {
//   this.title = title;
//   this.author = author;
//   this.pageNo = pageNo;
//   this.isRead = isRead;
//   this.info = function () {
//     return `${title} by ${author}, ${pageNo} pages, ${
//       isRead ? "read" : "not read yet"
//     }`;
//   };
// }

class Book {
  constructor(title, author, pageNo, isRead) {
    this.title = title;
    this.author = author;
    this.pageNo = pageNo;
    this.isRead = isRead;
  }

  info = function () {
    return `${this.title} by ${this.author}, ${this.pageNo} pages, ${
      this.isRead ? "read" : "not read yet"
    }`;
  };
}

class Library {
  #books;

  constructor() {
    this.#books = [];
  }

  get books() {
    return this.#books;
  }

  addBookToLibrary(title, author, pageNo, isRead) {
    if (title && author && pageNo && isRead != undefined) {
      const newBook = new Book(title, author, pageNo, isRead);
      this.#books.push(newBook);
      console.log("Added " + this.#books[this.#books.length - 1].info());
    } else return;
  }

  removeBookFromLibrary(index) {
    this.#books.splice(index, 1);
  }

  toggleBookReadStatus(index) {
    this.#books[index].isRead = !this.#books[index].isRead;
  }
}

export { Library, Book };
