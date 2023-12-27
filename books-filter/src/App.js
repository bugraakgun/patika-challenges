import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ImgBooks from "../src/components/Main/books.jpg";
import { useEffect, useState } from "react";
const tempList = [
  { id: 1, title: "book 1", author: "Author 1", img: ImgBooks, pageCount: 200 },
  { id: 2, title: "book 2", author: "Author 2", img: ImgBooks, pageCount: 150 },
  { id: 3, title: "book 3", author: "Author 3", img: ImgBooks, pageCount: 180 },
  // ... Diğer kitaplar
];

function App() {
  const [books, setBooks] = useState([]);
  const [books1, setBooks1] = useState([]);
  useEffect(() => {
    setBooks(tempList);
    setBooks1(tempList)
  }, []);

  return (
    <>
      <Header books={books} setBooks1={setBooks1}></Header>
      <div className="container mx-auto h-full">
        <Main books1={books1}></Main>
      </div>
    </>
  );
}

export default App;
