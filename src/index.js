import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const bookData = [
  {
    id: 1,
    name: "Atomic Habbits",
    author: "James Clear",
    summary:
      "It is a comprehensive guide to building good habits and breaking bad ones using a four-step framework based on biology, psychology, and neuroscience",
    pages: 300,
    price: 250,
    stock: 0,
    soldOut: true,
    photoName: "books/atomic-habits.jpg",
  },
  {
    id: 2,
    name: "Deep Work",
    author: "Cal Newport",
    summary:
      "the ability to focus without distraction on a cognitively demanding task",
    pages: 500,
    price: 400,
    stock: 70,
    soldOut: false,
    photoName: "books/deep-work.jpg",
  },
  {
    id: 3,
    name: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    summary: "explores the core principles of building robust software",
    pages: 600,
    price: 800,
    stock: 120,
    soldOut: false,
    photoName: "books/designing-data-Intensive.jpg",
  },
  {
    id: 4,
    name: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    summary:
      "A highly revered introduction to programming and software architecture",
    pages: 300,
    price: 200,
    stock: 180,
    soldOut: false,
    photoName: "books/eloquent-javaScript.jpg",
  },
  {
    id: 5,
    name: "The Pragmatic Programmer",
    author: "David Thomas",
    summary:
      "A classic software engineering guide that emphasizes craftsmanship, adaptable thinking, and practical problem-solving",
    pages: 600,
    price: 500,
    stock: 150,
    soldOut: false,
    photoName: "books/the-pragmatic-programmer.jpg",
  },
  {
    id: 6,
    name: "The Psychology of Money",
    author: "Morgan Housel",
    summary:
      " He argues that doing well with money is not about intelligence or complex math",
    pages: 200,
    price: 100,
    stock: 60,
    soldOut: false,
    photoName: "books/the-psychology-of-money.jpg",
  },
  {
    id: 7,
    name: "You Don't Know JS",
    author: "Kyle Simpson",
    summary:
      "He challenges developers to move beyond surface-level syntax and truly master the engine mechanics, scoping, closures, and prototypes that power JavaScript",
    pages: 400,
    price: 1000,
    stock: 600,
    soldOut: false,
    photoName: "books/you-don't-know-jS.jpg",
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <BookList />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Liaquat Lahore Book Store</h1>
    </header>
  );
}

function BookList() {
  const books = bookData;
  // const books = [];
  const bookNum = books.length;
  return (
    <main className="book-list">
      <h2>Our Stock</h2>
      {bookNum && (
        <ul>
          {books.map((book) => (
            <Book bookObj={book} key={book.name} />
          ))}
        </ul>
      )}

      {/* <Book
        name="Atomic Habbits"
        summary="  It is a comprehensive guide to building good habits and breaking bad
        ones using a four-step framework based on biology, psychology, and
        neuroscience"
        photoName="books/atomic-habits.jpg"
        price={250}
      /> */}
    </main>
  );
}

function Book(props) {
  console.log(props);
  return (
    <li className="book-card">
      <img src={props.bookObj.photoName} alt="Atomic Habbits"></img>
      <h2>{props.bookObj.name}</h2>
      <p> {props.bookObj.summary} </p>
      <span>{props.bookObj.price + 3}</span>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour > openHour && hour < closeHour;
  console.log(isOpen);
  //   if (hour > open && hour < close) alert("the Shop is Currently Open");
  //   else alert("The Shop is Closed");

  return (
    <footer className="footer">
      {isOpen && (
        <div>
          <p>We'are open until {closeHour}:00.Come visit us or order online</p>
          <button>Order</button>
        </div>
      )}
      {/* {new Date().toLocaleDateString()}. The Store is currently Open */}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
