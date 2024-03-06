const newBookBtn = document.querySelector('#new-book-btn');
const newBookForm = document.querySelector('#new-book-form');
const submitBtn = document.querySelector('#submitBtn');

newBookBtn.addEventListener('click', () => {
    newBookForm.style.display = "grid";
});

const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;

    let toLibrary = new Book(title, author, pages, read);
    myLibrary.push(toLibrary);
}

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
    console.log(myLibrary);
})