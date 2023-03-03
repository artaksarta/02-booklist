import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import MainLayout from './layouts/MainLayout';
import BookPage from './components/BookPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Main />} />
            <Route path=":slug" element={<BookPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
