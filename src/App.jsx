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
import Details from './pages/Details/Details.jsx';
import BookmarkMedia from './pages/BookmarkMedia/BookmarkMedia.jsx';
import Search from './pages/Search/Search.jsx';

export default function App() {

  const [userInput, setUserInput] = useState('');
  const [isSearchButtonPushed, setIsSearchButtonPushed] = useState(false);

  return (
    <div className={styles.page_wrapper}>
      <BrowserRouter>
        <NavBar setUserInput={setUserInput} />
        <Routes>
          <Route path='home' element={<Home userInput={userInput} setUserInput={setUserInput} isSearchButtonPushed={isSearchButtonPushed} setIsSearchButtonPushed={setIsSearchButtonPushed} />} >
            <Route path='search' element={<Search userInput={userInput} setUserInput={setUserInput} isSearchButtonPushed={isSearchButtonPushed} setIsSearchButtonPushed={setIsSearchButtonPushed} />} />
          </Route>
          <Route path='movie' element={<Movies userInput={userInput} setUserInput={setUserInput} isSearchButtonPushed={isSearchButtonPushed} setIsSearchButtonPushed={setIsSearchButtonPushed} />} >
            <Route path='search' element={<Search userInput={userInput} setUserInput={setUserInput} isSearchButtonPushed={isSearchButtonPushed} setIsSearchButtonPushed={setIsSearchButtonPushed} />} />
          </Route>
          <Route path='tv' element={<TvSeries userInput={userInput} setUserInput={setUserInput} isSearchButtonPushed={isSearchButtonPushed} setIsSearchButtonPushed={setIsSearchButtonPushed} />} >
            <Route path='search' element={<Search userInput={userInput} setUserInput={setUserInput} isSearchButtonPushed={isSearchButtonPushed} setIsSearchButtonPushed={setIsSearchButtonPushed} />} />
          </Route>
          <Route path=':type/:id' element={<Details />} />
          <Route path='bookmark' element={<BookmarkMedia userInput={userInput} setUserInput={setUserInput} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}