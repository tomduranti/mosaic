//react
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import SearchInput from '@atoms/SearchInput/SearchInput.jsx';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isSearchButtonPressed, setIsSearchButtonPressed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInput && isSearchButtonPressed) {
      navigate(`search?q=${userInput}&type=movie`);
      setIsSearchButtonPressed(false);
    }
  }, [isSearchButtonPressed]);

  return (
    <>
      <h1 className='hidden' aria-label='Movie page'>
        Movie page
      </h1>
      
      <SearchInput
        text='movies'
        userInput={userInput}
        setUserInput={setUserInput}
        setIsSearchButtonPressed={setIsSearchButtonPressed}
      />
      <Outlet
        context={{ userInput, movies, setMovies, setIsSearchButtonPressed }}
      />
    </>
  );
}
