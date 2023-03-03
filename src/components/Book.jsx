import styles from './Book.module.css';

const Book = ({ book, showFullInfo }) => {
  return (
    <div className={styles.book}>
      <a href={book.img} target="_blank" rel="noreferrer">
        <img className={styles.img} src={book.img} alt={book.alt} />
      </a>
      <div className={styles.cont}>
        <h3>{book.author}</h3>
        <h3 className={styles.header} onClick={() => showFullInfo(book)}>
          {book.title}
        </h3>
      </div>
    </div>
  );
};

export default Book;
