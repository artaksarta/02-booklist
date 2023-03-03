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
    slug: 'dmitry-iznasillov-the-kinsman',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aspernatur ipsum fugiat quisquam assumenda dolor iste odit, laborum ab. Corporis quibusdam quia omnis quas, iste eos. Nemo suscipit ducimus praesentium enim rerum. Quibusdam, tenetur. Amet, fuga nisi. Unde porro, aut maxime fuga est quas ea iste et nostrum nam vero ipsum quidem nulla cumque sequi accusantium quisquam velit magni fugit.',
  },
  {
    author: 'Orhan Pamuk',
    title: 'The White Castle',
    id: uuidv4(),
    img: p02,
    alt: '02',
    slug: 'orhan-pamuk-the-white-castle',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aspernatur ipsum fugiat quisquam assumenda dolor iste odit, laborum ab. Corporis quibusdam quia omnis quas, iste eos. Nemo suscipit ducimus praesentium enim rerum. Quibusdam, tenetur. Amet, fuga nisi. Unde porro, aut maxime fuga est quas ea iste et nostrum nam vero ipsum quidem nulla cumque sequi accusantium quisquam velit magni fugit.',
  },
  {
    author: 'Vladimir Sorokin',
    title: 'Their Four Hearts',
    id: uuidv4(),
    img: p03,
    alt: '03',
    slug: 'vladimir-sorokin-their-four-hearts',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aspernatur ipsum fugiat quisquam assumenda dolor iste odit, laborum ab. Corporis quibusdam quia omnis quas, iste eos. Nemo suscipit ducimus praesentium enim rerum. Quibusdam, tenetur. Amet, fuga nisi. Unde porro, aut maxime fuga est quas ea iste et nostrum nam vero ipsum quidem nulla cumque sequi accusantium quisquam velit magni fugit.',
  },
  {
    author: 'Leo Tolstoy',
    title: 'Novels',
    id: uuidv4(),
    img: p04,
    alt: '04',
    slug: 'leo-tolstoy-novels',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aspernatur ipsum fugiat quisquam assumenda dolor iste odit, laborum ab. Corporis quibusdam quia omnis quas, iste eos. Nemo suscipit ducimus praesentium enim rerum. Quibusdam, tenetur. Amet, fuga nisi. Unde porro, aut maxime fuga est quas ea iste et nostrum nam vero ipsum quidem nulla cumque sequi accusantium quisquam velit magni fugit.',
  },
  {
    author: 'Oscar Wilde',
    title: 'The Picture of Dorian Gray',
    id: uuidv4(),
    img: p05,
    alt: '05',
    slug: 'oscar-wilde-the-picture-of-dorian-gray',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aspernatur ipsum fugiat quisquam assumenda dolor iste odit, laborum ab. Corporis quibusdam quia omnis quas, iste eos. Nemo suscipit ducimus praesentium enim rerum. Quibusdam, tenetur. Amet, fuga nisi. Unde porro, aut maxime fuga est quas ea iste et nostrum nam vero ipsum quidem nulla cumque sequi accusantium quisquam velit magni fugit.',
  },
];

export default booklist;
