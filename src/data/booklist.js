import { v4 as uuidv4 } from 'uuid';
import p01 from './p01.jpg';
import p02 from './p02.jpg';
import p03 from './p03.jpg';
import p04 from './p04.jpg';
import p05 from './p05.jpg';

const booklist = [
  {
    author: 'Dmitry Iznasillov',
    title: 'The Kinsman',
    id: uuidv4(),
    img: p01,
    alt: '01',
  },
  {
    author: 'Orhan Pamuk',
    title: 'The White Castle',
    id: uuidv4(),
    img: p02,
    alt: '02',
  },
  {
    author: 'Vladimir Sorokin',
    title: 'Their Four Hearts',
    id: uuidv4(),
    img: p03,
    alt: '03',
  },
  {
    author: 'Leo Tolstoy',
    title: 'Novels',
    id: uuidv4(),
    img: p04,
    alt: '04',
  },
  {
    author: 'Oscar Wilde',
    title: 'The Picture of Dorian Gray',
    id: uuidv4(),
    img: p05,
    alt: '05',
  },
];

export default booklist;
