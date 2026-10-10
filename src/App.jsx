//react
import { BrowserRouter, Routes, Route } from 'react-router';
import NavBar from '@organisms/NavBar/NavBar.jsx';
import Home from '@pages/Home/Home.jsx';
import HomePopular from '@pages/Home/HomePopular.jsx';
import HomeSearch from '@pages/Home/HomeSearch.jsx';
import Movies from '@pages/Movies/Movies.jsx';
import MoviesPopular from '@pages/Movies/MoviesPopular.jsx';
import MoviesSearch from '@pages/Movies/MoviesSearch.jsx';
import TvSeries from '@pages/TvSeries/TvSeries.jsx';
import TvSeriesPopular from '@pages/TvSeries/TvSeriesPopular.jsx';
import TvSeriesSearch from '@pages/TvSeries/TvSeriesSearch.jsx';
import Details from '@pages/Details/Details.jsx';
import BookmarkMedia from '@pages/BookmarkMedia/BookmarkMedia.jsx';
import BookmarkMediaDisplay from '@pages/BookmarkMedia/BookmarkMediaDisplay.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

//sass
import '@base/_base.scss';
import './scss/main.scss';

// Create a client
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className='page_wrapper'>
        <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}