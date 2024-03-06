const newBookBtn = document.querySelector('#new-book-btn');
const newBookForm = document.querySelector('#new-book-form');

newBookBtn.addEventListener('click', () => {
    newBookForm.style.display = "grid";
});