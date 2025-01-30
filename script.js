const article = document.querySelector("#article");
const dialogElem = document.querySelector("#dialog");
const showModalBtn = document.querySelector("#newBook");
const closeModalBtn = document.querySelector("#closeModal");
const addBookBtn = document.querySelector("#addBook");

const myLibrary = [
    {
        title: "The Hobbit",
        author: "J.J.R. Tolkien",
        pages: "295",
        read: "read",
    }
];

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

console.table(myLibrary);

function createCard() {
    myLibrary.forEach((val) => {
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

        cardTitle.textContent = val.title;
        cardAuthor.textContent = val.author;
        cardPages.textContent = `${val.pages} Pages`;
        if(val.read === true){
            cardRead.textContent = "Read";
        } else{
            cardRead.textContent = "Not Read";
        }

        article.appendChild(card);
        card.appendChild(cardTitle);
        cardTitle.appendChild(cardAuthor);
        cardAuthor.appendChild(cardPages);
        cardPages.appendChild(cardRead);
    })
}
createCard();

showModalBtn.addEventListener("click", () => {
    dialogElem.showModal();
});

closeModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialogElem.close();
});

addBookBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const inputTitle = document.querySelector("#title").value;
    const inputAuthor = document.querySelector("#author").value;
    const inputPages = document.querySelector("#pages").value;
    const inputRead = document.querySelector("#read").checked;
    addBookToLibrary(inputTitle, inputAuthor, inputPages, inputRead);
    console.table(myLibrary);

    article.textContent = "";
    createCard();
});