import styles from './Book.module.css';

const Book = ({ book }) => {
  return (
    <div className={styles.book}>
      <img src={book.img} alt={book.alt} />
      <div className="container">
        <br />
        <h3>{book.author}</h3>
        <br />
        <h2>{book.title}</h2>
      </div>
    </div>
  );
};

export default Book;
