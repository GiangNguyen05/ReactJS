function ItemBook({ name, handleEdit, handleDel }) {
  return (
    <>
      <li>
        <h2 className="name-book">{name}</h2>

        <button className="btn-ibook edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn-ibook del" onClick={handleDel}>
          Del
        </button>
      </li>
    </>
  );
}

export default ItemBook;
