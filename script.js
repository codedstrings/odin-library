import { addBookToLibrary, myLibrary } from "./module/libraryscript.js";

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
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pageNo = document.getElementById("pageNo").value;
  const isRead = document.getElementById("isRead").checked;

  addBookToLibrary(title, author, parseInt(pageNo), isRead);
  renderLibrary();
  dialog.close();
  newBookForm.reset();
});

renderLibrary();

function renderLibrary() {
  librarySection.innerHTML = "";

  myLibrary.forEach((book) => {
    let newBookElement = document.createElement("div");
    newBookElement.classList.add("book");

    newBookElement.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pageNo}</p>
            <p>Status: ${book.isRead ? "Read" : "Not read yet"}</p>
        `;
    librarySection.appendChild(newBookElement);
  });
}
