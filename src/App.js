import './App.css';
import List from './components/List';
import booklist from './data/booklist';

function App() {
  return (
    <div className="App">
      <h1>Book List</h1>
      <List booklist={booklist} />
    </div>
  );
}

export default App;
