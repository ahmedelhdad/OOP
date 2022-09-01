let myArray = [];





if(window.localStorage.getItem('book'))
{
    myArray =JSON.parse(localStorage.getItem('book'))
}


class Book {
  static count = 1;
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.count = Book.count++;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
    row.setAttribute('id',book.count)
    row.innerHTML = ` 
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td>${book.count}</td>
        <td class='clears'>X</td>
        `;
    list.appendChild(row);
  }
}
getDataFromLocalStorage()

function clearfields() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("ISBN").value = "";
}

document.getElementById("book-form").addEventListener("submit", (e) => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const ISBN = document.getElementById("ISBN").value;

  if (title && author && ISBN) {
    document.getElementById("book-list").innerHTML=''
    let book = new Book(title, author, ISBN);
    myArray.push(book);
    let ui = new UI();
    myArray.map((book) => ui.addBookToList(book))
    clearfields();
    let afterHeand = document.querySelector(".container h1");
    let message = document.createElement("div");
    message.classList.add("success");
    message.innerHTML = "Book Added";
    afterHeand.appendChild(message);
    e.preventDefault();
    setTimeout(() => {
      message.remove();
    }, 3000);
    localStorageBooks(myArray)
  } else {
    let afterHeand = document.querySelector(".container h1");
    let message = document.createElement("div");
    message.classList.add("orror");
    message.innerHTML = "Please Fill in all fields";
    afterHeand.appendChild(message);
    e.preventDefault();
    setTimeout(() => {
      message.remove();
    }, 3000);
  }
});



document.body.onclick = (e) => 
{
    if(e.target.classList.contains('clears'))
    {
        cleatID(e.target.parentElement.id)
        e.target.parentElement.remove()
    }
}
function localStorageBooks(Books)
{
    window.localStorage.setItem('book',JSON.stringify(Books))
}

function getDataFromLocalStorage()
{
  let data =JSON.parse(window.localStorage.getItem('book'))
  if(data)
  {
    let ui = new UI();
    data.map((book) => ui.addBookToList(book))
  }
}



