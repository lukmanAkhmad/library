const myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title,author,pages,read){
    const books = new Book(title,author,pages,read);
    myLibrary.push(books)
}

addBookToLibrary("The Hobbit","J.J.R. Tolkien","295","read");

addBookToLibrary("The Hobbit","J.J.R. Tolkien","295","not read");
console.table(myLibrary);