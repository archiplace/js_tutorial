// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {

}

UI.prototype.addBookToList = function(book) {
  console.log(book);
}

// Event listeners
document.getElementById('book-form').addEventListener('submit', addBook);

function addBook(e){

  // get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  ui.addBookToList(book);

  console.log(ui);

  e.preventDefault();
}