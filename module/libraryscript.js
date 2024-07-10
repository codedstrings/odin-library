export const myLibrary = [];
//constructor
function Book(title, author, pageNo, isRead) {
  this.title = title;
  this.author = author;
  this.pageNo = pageNo;
  this.isRead = isRead;
  this.info = function () {
    return `${title} by ${author}, ${pageNo} pages, ${
      isRead ? "read" : "not read yet"
    }`;
  };
}
export function addBookToLibrary(title, author, pageNo, isRead) {
  if (title && author && pageNo && isRead != undefined) {
    const newBook = new Book(title, author, pageNo, isRead);
    myLibrary.push(newBook);
    console.log("Added " + myLibrary[myLibrary.length - 1].info());
  } else return;
}

//hardcoding initial 3 entries.
addBookToLibrary("Harry Potter1", "J.K.Rowling", 400, false);
addBookToLibrary("Harry Potter2", "J.K.Rowling", 450, true);
addBookToLibrary("Harry Potter3", "J.K.Rowling", 500, false);
