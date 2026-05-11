import { useState } from "react";
import ItemBook from "./BookItem.jsx";
import "../Style/Book.css";

export default function Book() {
  const [listBook, setListBook] = useState([]);

  const add = () => {
    const newBook = prompt("hay nhap ten sach");
    setListBook([...listBook, newBook]);
  };
  const del = () => {
    setListBook(listBook.slice(0, -1));
  };
  return (
    <>
      <div className="book-container">
        <h1>My List Book</h1>
        <ul className="list-book">
          {listBook.map((item, index) => (
            <ItemBook key={index} name={item} />
          ))}
        </ul>
        <div className="btn-wrap">
          <button className="btn-book" onClick={add}>
            ADD
          </button>
          <button className="btn-book" onClick={del}>
            DEL
          </button>
        </div>
      </div>
    </>
  );
}
