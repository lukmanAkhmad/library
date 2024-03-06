const newBookBtn = document.querySelector('#new-book-btn');
const newBookForm = document.querySelector('#new-book-form');
const submitBtn = document.querySelector('#submitBtn');
const mainContent = document.querySelector('.main-content');

newBookBtn.addEventListener('click', () => {
    newBookForm.style.display = "grid";
});

const myLibrary = [
    {
        title: 'Dunia Sophie',
        author: 'Jostein Gaarder',
        pages: '798',
        read: true,
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.saklarBaca = function(){
    this.read = !this.read;
}

function addBookToLibrary() {
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
    render();
});

function render() {
    mainContent.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let cardMain = document.createElement('div');
        cardMain.classList.add('isi-main-content');
        cardMain.innerHTML = `
        <div class="header-card">
        <h3>${book.title}</h3>
        <h4>${book.author}</h4>
        </div>
        <div class="body-card">
        <p>${book.pages}</p>
        <p>${book.read ? "Read" : "Not Yet Read"}</p>
        </div>
        <div class="footer-card">
        <button class="remove-btn" onclick="removeArray(${i})">Delete</button>
        <button class="btn-read" onclick="saklarRead(${i})">Read</button> 
        </div>
        `;

        mainContent.appendChild(cardMain);
    }

}

function removeArray(index){
    myLibrary.splice(index, 1);
    render();
}

function saklarRead(index){
    myLibrary[index].saklarBaca();
    render();
}