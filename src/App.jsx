//react
import { BrowserRouter, Routes, Route } from 'react-router';

//sass
import styles from './sass/base/_App.module.scss';
import './sass/main.scss';

//components
import NavBar from './components/atoms/NavBar/NavBar.jsx';
import Navigate from './pages/Navigate/Navigate.jsx';
import Home from './pages/Home/Home.jsx';
import HomePopular from './pages/Home/HomePopular.jsx';
import HomeSearch from './pages/Home/HomeSearch.jsx';
import Movies from './pages/Movies/Movies.jsx';
import MoviesPopular from './pages/Movies/MoviesPopular.jsx';
import MoviesSearch from './pages/Movies/MoviesSearch.jsx';
import TvSeries from './pages/TvSeries/TvSeries.jsx';
import TvSeriesPopular from './pages/TvSeries/TvSeriesPopular.jsx';
import TvSeriesSearch from './pages/TvSeries/TvSeriesSearch.jsx';
import Details from './pages/Details/Details.jsx';
import BookmarkMedia from './pages/BookmarkMedia/BookmarkMedia.jsx';
import BookmarkMediaDisplay from './pages/BookmarkMedia/BookmarkMediaDisplay.jsx';

export default function App() {

  return (
      <main className={styles.page_wrapper}  role='main'>
        <BrowserRouter basename='/mosaic'>
          <NavBar />
          <Routes>
            <Route path='/' element={<Navigate to='/home' replace />} />
            <Route path='home' element={<Home />} >
              <Route index element={<HomePopular />} />
              <Route path='search' element={<HomeSearch />} />
            </Route>
            <Route path='movie' element={<Movies />} >
              <Route index element={<MoviesPopular />} />
              <Route path='search' element={<MoviesSearch />} />
            </Route>
            <Route path='tv' element={<TvSeries />} >
              <Route index element={<TvSeriesPopular />} />
              <Route path='search' element={<TvSeriesSearch />} />
            </Route>
            <Route path=':type/:id' element={<Details />} />
            <Route path='bookmark' element={<BookmarkMedia />} >
              <Route index element={<BookmarkMediaDisplay />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
  )
}