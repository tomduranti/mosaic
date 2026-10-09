//react
import { useState, useEffect, useMemo } from 'react';
import { Outlet, useNavigate } from 'react-router';
import SearchInput from '@atoms/SearchInput/SearchInput.jsx';

//functions
import { fisherYatesShuffle } from '@utils/index.js';

export default function Home() {
  const [userInput, setUserInput] = useState('');
  const [isSearchButtonPressed, setIsSearchButtonPressed] = useState(false);
  const [trending, setTrending] = useState([]);
  const [movieAndTvSeries, setMovieAndTvSeries] = useState({
    movies: [],
    tv_series: [],
  });
  const shuffleMovieAndTvSeries = useMemo(() => {
    return fisherYatesShuffle([
      ...movieAndTvSeries.movies,
      ...movieAndTvSeries.tv_series,
    ]);
  }, [movieAndTvSeries.movies, movieAndTvSeries.tv_series]);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInput && isSearchButtonPressed) {
      navigate(`search?q=${userInput}&type=multi`);
      setIsSearchButtonPressed(false);
    }
  }, [isSearchButtonPressed]);

  return (
    <>
      <h1 className='hidden'  aria-label='Home page'>
        Home page
      </h1>

      <SearchInput
        text='movies or TV series'
        userInput={userInput}
        setUserInput={setUserInput}
        setIsSearchButtonPressed={setIsSearchButtonPressed}
      />
      <Outlet
        context={{
          userInput,
          trending,
          setTrending,
          setMovieAndTvSeries,
          shuffleMovieAndTvSeries,
          setIsSearchButtonPressed,
        }}
      />
    </>
  );
}
