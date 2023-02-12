const Book = ({ book }) => {
  return (
    <div className="book">
      <a href={book.img} target="_blank">
        <img src={book.img} alt={book.alt} />
      </a>
      <div className="cont">
        <h3>{book.author}</h3>
        <h2>{book.title}</h2>
      </div>
    </div>
  );
};

export default Book;
