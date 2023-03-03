import Book from './Book';
import styles from './List.module.css';

const List = ({ booklist, showFullInfo }) => {
  return (
    <div className={styles.list}>
      {!booklist.length && <h2>No matches found</h2>}
      {booklist.map((book) => {
        return <Book key={book.id} showFullInfo={showFullInfo} book={book} />;
      })}
    </div>
  );
};

export default List;
