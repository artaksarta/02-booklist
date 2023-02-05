import styles from './List.module.css';
import Book from './Book';

const List = ({ booklist }) => {
  return (
    <div className="container">
      <div>
        {booklist.map((book) => {
          return <Book key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
};

export default List;
