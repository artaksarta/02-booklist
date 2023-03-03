import { useParams } from 'react-router-dom';
import booklist from '../data/booklist';
import styles from './BookPage.module.css';

const SingleCourse = () => {
  const params = useParams();
  const book = booklist.find((b) => b.slug === params.slug);
  return (
    <div className={styles.info}>
      <a href={book.img} target="_blank" rel="noreferrer">
        <img className={styles.img} src={book.img} alt={book.alt} />
      </a>
      <div className={styles.container}>
        <h2>{book.author}</h2>
        <h1>{book.title}</h1>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default SingleCourse;
