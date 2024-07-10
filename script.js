import { addBookToLibrary, myLibrary } from "./module/libraryscript.js";

const librarySection = document.querySelector(".myBooks");
const addButton = document.querySelector(".add-book-btn");
addButton.addEventListener("click", addNewBook);

renderLibrary();

function renderLibrary() {
  // Clear existing content in librarySection
  librarySection.innerHTML = "";

  // Iterate through myLibrary and create a new element for each book
  myLibrary.forEach((book) => {
    // Create a new <div> element for each book
    let newBookElement = document.createElement("div");
    newBookElement.classList.add("book");
    // Set the innerHTML or textContent of the new element
    newBookElement.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pageNo}</p>
            <p>Status: ${book.isRead ? "Read" : "Not read yet"}</p>
        `;
    // Append the newBookElement to the librarySection
    librarySection.appendChild(newBookElement);
    // console.log(newBookElement);
  });
}

function addNewBook() {
  console.log("clicked new button");

  //use modal form to fetch data from user
  //call addbooktolibrary with that data.
}
