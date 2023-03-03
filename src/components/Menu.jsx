import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <Link to="/">Main</Link>
    </nav>
  );
};

export default Menu;
