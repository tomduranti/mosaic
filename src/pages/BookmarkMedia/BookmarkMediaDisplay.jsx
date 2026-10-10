//react
import CardGridLayout from '@templates/CardGridLayout/CardGridLayout.jsx';
import Loading from '@atoms/Loading/Loading.jsx';
import { useQueries } from '@tanstack/react-query';

//functions
import { getDataFromApi, getItemFromLocalStorage, isMovie } from '@utils/index.js';

export default function BookmarkMediaDisplay() {
  const localStorageArray = getItemFromLocalStorage();
  if (localStorageArray.length === 0) return <p className='text_preset_2  text_white'>There are no bookmarked items</p>;

  const data = useQueries({
    queries: localStorageArray.map(obj => ({
      queryKey: ['bookmarked item', obj.id],
      queryFn: () => getDataFromApi('details', '', obj.type, obj.id),
    })),
  });

  const isPending = data.some(item => item.isPending);
  if (isPending) return <Loading />;
  const items = data.map(item => item.data);

  const movies = items.filter(isMovie);
  const moviesLength = movies.length > 0;
  const tvShows = items.filter((item) => !isMovie(item));
  const tvShowsLength = tvShows.length > 0;

  return (
    <>
      { moviesLength && <CardGridLayout pageName={'Bookmarked movies'} array={movies} /> }
      { tvShowsLength && <CardGridLayout pageName={'Bookmarked TV shows'} array={tvShows} /> }
    </>
  );
}