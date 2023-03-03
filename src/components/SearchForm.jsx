import { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import styles from './SearchForm.module.css';

const SearchForm = ({ filterList }) => {
  const [text, setText] = useState('');

  const clearForm = (event) => {
    event.preventDefault();
    setText('');
  };

  useEffect(() => {
    filterList(text);
  }, [text]);

  return (
    <>
      <div className={styles.form}>
        <input
          placeholder="Search..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            console.log(text);
          }}
        ></input>
        <button onClick={clearForm} title="Clear form">
          <AiOutlineDelete className={styles.icon} />
        </button>
      </div>
    </>
  );
};

export default SearchForm;
