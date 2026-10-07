//react
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import SearchInput from '@atoms/SearchInput/SearchInput.jsx';

export default function TvSeries() {
  const [tvSeries, setTvSeries] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isSearchButtonPressed, setIsSearchButtonPressed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInput && isSearchButtonPressed) {
      navigate(`search?q=${userInput}&type=tv`);
      setIsSearchButtonPressed(false)
    }
  }, [isSearchButtonPressed]);

  return (
    <>
      <h1 className='hidden' aria-label='TV Series page'>
        TV Series page
      </h1>

      <SearchInput
        text='TV series'
        userInput={userInput}
        setUserInput={setUserInput}
        setIsSearchButtonPressed={setIsSearchButtonPressed}
      />
      <Outlet
        context={{ userInput, tvSeries, setTvSeries, setIsSearchButtonPressed }}
      />
    </>
  );
}
