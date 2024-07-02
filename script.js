const myLibrary = [];
//constructor
function Book(title, author, pageNo, isRead){
    this.title = title; 
    this.author = author;
    this.pageNo = pageNo;
    this.isRead = isRead;
    this.info = function(){
        return `${title} by ${author}, ${pageNo} pages, ${isRead?"read":"not read yet"}`
    };
}
function addBookToLibrary(title, author, pageNo, isRead) {
    if(title && author && pageNo && isRead){
        myLibrary.push(new Book(title, author, pageNo, isRead));
        console.log("Added"+myLibrary[myLibrary.length-1].info());
    }else return;
  }
