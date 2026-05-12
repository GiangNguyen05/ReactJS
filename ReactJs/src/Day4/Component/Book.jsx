import { useState } from "react";
import ItemBook from "./BookItem.jsx";
import "../Style/Book.css";

export default function Book() {
  const [listBook, setListBook] = useState([]);

  const add = () => {
    const newBook = prompt("hay nhap ten sach");
    setListBook([...listBook, newBook]);
  };
  const del = (index) => {
    setListBook(listBook.filter((_, i) => i !== index));
  };
  const edit = (index) => {
    const currentName = listBook[index];
    const newName = prompt("Chỉnh sửa tên sách:", currentName);

    if (newName && newName.trim() !== "") {
      const newList = [...listBook];
      newList[index] = newName; // Cập nhật tên mới tại vị trí index
      setListBook(newList);
    }
  };
  return (
    <>
      <div className="book-container">
        <h1>My List Book</h1>
        <ul className="list-book">
          {listBook.map((item, index) => (
            <ItemBook
              key={index}
              name={item}
              handleEdit={() => edit(index)}
              handleDel={() => del(index)}
            />
          ))}
        </ul>
        <div className="btn-wrap">
          <button className="btn-book" onClick={add}>
            ADD
          </button>
        </div>
      </div>
    </>
  );
}
