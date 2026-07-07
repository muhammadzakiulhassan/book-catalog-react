import React from "react";
import ReactDOM from "react-dom/client";

const books = [
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
    <div>
      <Header />
      <BookList />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Liaquat Lahore Booke Store</h1>;
}

function BookList() {
  return (
    <div>
      <Book />
      <Book />
      <Book />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      {new Date().toLocaleDateString()}. The Store is currently Open
    </footer>
  );
}

function Book() {
  return (
    <div>
      <img src="books/atomic-habits.jpg" alt="Atomic Habbits"></img>
      <h2>Atomic Habbits</h2>
      <p>
        It is a comprehensive guide to building good habits and breaking bad
        ones using a four-step framework based on biology, psychology, and
        neuroscience
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
