import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styles from './ModalWindow.module.css';

const ModalWindow = ({ fullBook, setFullInfo }) => {
  return (
    <div className={styles.back}>
      <div>
        <a href={fullBook.img} target="_blank" rel="noreferrer">
          <img className={styles.img} src={fullBook.img} alt={fullBook.alt} />
        </a>
        <div className={styles.container}>
          <button className={styles.closebutton}>
            <IoClose
              onClick={() => setFullInfo(false)}
              className={styles.icon}
            />
          </button>
          <h2>{fullBook.author}</h2>
          <h1>{fullBook.title}</h1>
          <p>
            {fullBook.description.length > 150
              ? fullBook.description.slice(0, 150) + '...'
              : fullBook.description}
          </p>
          <Link className={styles.fullbutton} to={fullBook.slug}>
            Full info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
