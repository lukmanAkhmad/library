const article = document.querySelector("#article");

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(title, author, pages, read) {
    const books = new Book(title, author, pages, read);
    myLibrary.push(books);
};

addBookToLibrary("The Hobbit", "J.J.R. Tolkien", "295", "read");

addBookToLibrary("The Hobbit", "J.J.R. Tolkien", "295", "not read");
console.table(myLibrary);

myLibrary.forEach(createCard);

function createCard(values) {
    const card = document.createElement("div");
    card.classList.add("cards");
    const cardTitle = document.createElement("p");
    cardTitle.classList.add("cardTitle");
    const cardAuthor = document.createElement("p");
    cardAuthor.classList.add("cardAuthor");
    const cardPages = document.createElement("p");
    cardPages.classList.add("cardPages");
    const cardRead = document.createElement("p");
    cardRead.classList.add("cardRead");

    cardTitle.textContent = values.title;
    cardAuthor.textContent = values.author;
    cardPages.textContent = `${values.pages} Pages`;
    cardRead.textContent = values.read;

    article.appendChild(card);
    card.appendChild(cardTitle);
    cardTitle.appendChild(cardAuthor);
    cardAuthor.appendChild(cardPages);
    cardPages.appendChild(cardRead);
};