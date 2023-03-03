import { useState } from 'react';
import styles from './Main.module.css';
import booklist from '../data/booklist';
import List from './List';
import SearchForm from './SearchForm';
import ModalWindow from './ModalWindow';

const Main = () => {
  const [filteredList, setFilteredList] = useState(booklist);
  const [fullInfo, setFullInfo] = useState(false);
  const [fullBook, setFullBook] = useState({});

  const filterList = (request) => {
    setFilteredList(
      booklist.filter(
        (e) =>
          e.author.toLowerCase().includes(request.toLowerCase()) ||
          e.title.toLowerCase().includes(request.toLowerCase())
      )
    );
  };

  const showFullInfo = (book) => {
    setFullBook(book);
    setFullInfo(!fullInfo);
  };

  return (
    <div>
      <h1 className={styles.header}>Book List</h1>
      <SearchForm filterList={filterList} />
      <List showFullInfo={showFullInfo} booklist={filteredList} />
      {fullInfo && (
        <ModalWindow setFullInfo={setFullInfo} fullBook={fullBook} />
      )}
    </div>
  );
};

export default Main;
