import Book from './Book';

const List = ({ booklist }) => {
  return (
    <div className="list">
      {booklist.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </div>
  );
};

export default List;
