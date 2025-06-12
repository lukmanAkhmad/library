const article = document.querySelector("#article");
const dialogElem = document.querySelector("#dialog");
const showModalBtn = document.querySelector("#newBook");
const closeModalBtn = document.querySelector("#closeModal");
const addBookBtn = document.querySelector("#addBook");
const formField = document.querySelector("#form-field");
const fieldInputTitle = document.querySelector("#title");
const fieldInputAuthor = document.querySelector("#author");
const fieldInputPages = document.querySelector("#pages");
const errorMessageTitle = document.querySelector(".error-message-title");
const errorMessageAuthor = document.querySelector(".error-message-author");
const errorMessagePages = document.querySelector(".error-message-pages");

const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  switcherRead() {
    this.read ? (this.read = false) : (this.read = true);
  }
}

function addBookToLibrary(title, author, pages, read) {
  const books = new Book(title, author, pages, read);
  myLibrary.push(books);
}

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
    const deleteBookBtn = document.createElement("button");
    deleteBookBtn.classList.add("deleteBookBtn");
    const readStatusBtn = document.createElement("button");
    readStatusBtn.classList.add("readStatusBtn");

    cardTitle.textContent = val.title;
    cardAuthor.textContent = val.author;
    cardPages.textContent = `${val.pages} Pages`;
    if (val.read === true) {
      cardRead.textContent = "Read";
    } else {
      cardRead.textContent = "Not Read";
    }
    deleteBookBtn.textContent = "Delete";
    readStatusBtn.textContent = "Read Status";

    let indexBook = myLibrary.indexOf(val);
    console.log(indexBook);

    deleteBookBtn.addEventListener("click", () => {
      console.log("deleteBTN");
      console.log(indexBook);
      myLibrary.splice(indexBook, 1);
      console.table(myLibrary);
      renderCard();
    });
    readStatusBtn.addEventListener("click", () => {
      console.log(`readStatusButton on click`);
      toggleRead(indexBook);
      console.table(myLibrary);
    });

    article.appendChild(card);
    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardRead);
    card.appendChild(deleteBookBtn);
    card.appendChild(readStatusBtn);
  });
}
createCard();

showModalBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeModalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialogElem.close();
  formField.reset();
});

addBookBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (fieldInputTitle.validity.valueMissing) {
    showErrorInputTitle();
    errorMessageTitle.classList.add("active");
  }
  if (fieldInputAuthor.validity.valueMissing) {
    showErrorInputAuthor();
    errorMessageAuthor.classList.add("active");
  }
  if (fieldInputPages.validity.valueMissing) {
    showErrorInputPages();
    errorMessagePages.classList.add("active");
  }

  if (
    fieldInputTitle.validity.valueMissing ||
    fieldInputAuthor.validity.valueMissing ||
    fieldInputPages.validity.valueMissing
  ) {
    return;
  }

  const inputTitle = document.querySelector("#title").value;
  const inputAuthor = document.querySelector("#author").value;
  const inputPages = document.querySelector("#pages").value;
  const inputRead = document.querySelector("#read").checked;

  addBookToLibrary(inputTitle, inputAuthor, inputPages, inputRead);

  console.table(myLibrary);

  article.textContent = "";
  createCard();
  formField.reset();
});

function renderCard() {
  article.textContent = "";
  createCard();
}
function toggleRead(idx) {
  myLibrary[idx].switcherRead();
  article.textContent = "";
  console.log(`toggle read on click`);
  createCard();
}

const deleteErrorMessageTitle = () => {
  errorMessageTitle.textContent = "";
  errorMessageTitle.classList.remove("active");
};
const deleteErrorMessageAuthor = () => {
  errorMessageAuthor.textContent = "";
  errorMessageAuthor.classList.remove("active");
};
const deleteErrorMessagePages = () => {
  errorMessagePages.textContent = "";
  errorMessagePages.classList.remove("active");
};

fieldInputTitle.addEventListener("input", deleteErrorMessageTitle);
fieldInputAuthor.addEventListener("input", deleteErrorMessageAuthor);
fieldInputPages.addEventListener("input", deleteErrorMessagePages);

function showErrorInputTitle() {
  errorMessageTitle.textContent = "You need to enter a title.";
}
function showErrorInputAuthor() {
  errorMessageAuthor.textContent = "You need to enter an author's name.";
}
function showErrorInputPages() {
  errorMessagePages.textContent = "You need to enter a page count.";
}
