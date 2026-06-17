//react libraries and components
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';
import Loading from '../../components/atoms/Loading/Loading.jsx';

//functions
import getDataFromApi from '../../js/api/getDataFromApi.js';

export default function BookmarkMedia() {
  const [bookmarkedMedia, setBookmarkedMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userInput, setUserInput] = useState('');
  const [isSearchButtonPressed, setIsSearchButtonPressed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInput && isSearchButtonPressed) {
      navigate(`search?q=${userInput}&type=bookmarked`);
    }
  }, [isSearchButtonPressed]);

  useEffect(() => {
    setIsSearchButtonPressed(false);
  }, [userInput]);

  useEffect(() => {
    const tempArr = JSON.parse(localStorage.getItem('storedId'));
    Promise.all(
      tempArr?.map((obj) =>
        getDataFromApi('details', (res) => res, '', obj.type, obj.id),
      ),
    ).then((results) => setBookmarkedMedia(results))
    .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h1 className='hidden' aria-label='Bookmarked items page'>
        Bookmarked items page
      </h1>

      {/* <SearchInput
        text='bookmarked items'
        userInput={userInput}
        setUserInput={setUserInput}
        setIsSearchButtonPressed={setIsSearchButtonPressed}
      /> */}
      <Outlet
        context={{ userInput, bookmarkedMedia, isLoading, setIsSearchButtonPressed }}
      />
    </>
  );
}
