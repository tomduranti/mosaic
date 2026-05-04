//react
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

//sass
import styles from './sass/base/_App.module.scss';
import './sass/main.scss';

//components
import NavBar from './components/atoms/NavBar/NavBar.jsx';
import Home from './pages/Home/Home.jsx';
import Movies from './pages/Movies/Movies.jsx';
import TvSeries from './pages/TvSeries/TvSeries.jsx';
import BookmarkMedia from './pages/BookmarkMedia/BookmarkMedia.jsx';
import Search from './pages/Search/Search.jsx';

export default function App() {

  const [userInput, setUserInput] = useState('');

  return (
    <div className={styles.page_wrapper}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home userInput={userInput} setUserInput={setUserInput} />} />
          <Route path='/movies' element={<Movies userInput={userInput} setUserInput={setUserInput} />} />
          <Route path='/tv_series' element={<TvSeries userInput={userInput} setUserInput={setUserInput} />} />
          <Route path='/bookmark' element={<BookmarkMedia userInput={userInput} setUserInput={setUserInput} />} />
          <Route path='/search' element={<Search userInput={userInput} setUserInput={setUserInput} /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}