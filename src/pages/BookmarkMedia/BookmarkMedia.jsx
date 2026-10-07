//react libraries and components
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';

//functions
import getDataFromApi from '../../utils/getDataFromApi.js';

export default function BookmarkMedia() {
  const [bookmarkedMedia, setBookmarkedMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

      <Outlet
        context={{ bookmarkedMedia, isLoading }}
      />
    </>
  );
}
