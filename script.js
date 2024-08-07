import { Library } from "./module/libraryscript.js";

let myLibrary = new Library();
//hardcoding initial 3 entries.
myLibrary.addBookToLibrary("Harry Potter1", "J.K.Rowling", 400, false);
myLibrary.addBookToLibrary("Harry Potter2", "J.K.Rowling", 450, true);
myLibrary.addBookToLibrary("Harry Potter3", "J.K.Rowling", 500, false);

const librarySection = document.querySelector(".myBooks");
const addButton = document.querySelector(".add-book-btn");
const dialog = document.getElementById("bookDialog");
const closeDialogButton = document.getElementById("closeDialog");
const newBookForm = document.getElementById("newBookForm");

addButton.addEventListener("click", () => {
  dialog.showModal();
});

closeDialogButton.addEventListener("click", () => {
  dialog.close();
});

newBookForm.addEventListener("submit", (event) => {
  event.preventDefault(); //to not send data to the server
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pageNo = document.getElementById("pageNo").value;
  const isRead = document.getElementById("isRead").checked;

  myLibrary.addBookToLibrary(title, author, parseInt(pageNo), isRead);
  renderLibrary();
  dialog.close();
  newBookForm.reset();
});

function renderLibrary() {
  librarySection.innerHTML = "";

  myLibrary.books.forEach((book, index) => {
    let newBookElement = document.createElement("div");
    newBookElement.classList.add("book");

    newBookElement.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pageNo}</p>
            <p>Status: <button class="toggle-read-btn">${
              book.isRead ? "Read" : "Not read yet"
            }</button></p>
            <button class="remove-book-btn">Remove</button>
        `;

    // Event listener to remove the book
    newBookElement
      .querySelector(".remove-book-btn")
      .addEventListener("click", () => {
        myLibrary.removeBookFromLibrary(index);
        renderLibrary();
      });

    // Event listener to toggle the read status
    newBookElement
      .querySelector(".toggle-read-btn")
      .addEventListener("click", () => {
        myLibrary.toggleBookReadStatus(index);
        renderLibrary();
      });
    librarySection.appendChild(newBookElement);
  });
}

renderLibrary();
