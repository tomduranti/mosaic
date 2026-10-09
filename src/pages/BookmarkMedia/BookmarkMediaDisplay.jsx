//react libraries and components
import { useOutletContext } from 'react-router';
import CardGridLayout from '@templates/CardGridLayout/CardGridLayout.jsx';
import Loading from '@atoms/Loading/Loading.jsx';

export default function BookmarkMediaDisplay() {
  const { bookmarkedMedia, isLoading } = useOutletContext();

  const isMovie = (item) =>
    item.media_type === 'movie' || item.video !== undefined;

  const movies = bookmarkedMedia.filter(isMovie);
  const tvShows = bookmarkedMedia.filter((item) => !isMovie(item));
  const isArray = movies.length > 0 || tvShows.length > 0;

  if (isLoading) return <Loading />;

  return (
    <>
        {isArray ? (
          <>
            {movies.length > 0 && (
              <CardGridLayout
                pageName={'Bookmarked movies'}
                isTrending={false}
                array={movies}
              />
            )}
            {tvShows.length > 0 && (
              <CardGridLayout
                pageName={'Bookmarked TV shows'}
                isTrending={false}
                array={tvShows}
              />
            )}
          </>
        ) : (
          <p className='text_preset_2  text_white'>
            There are no bookmarked items
          </p>
        )
      }
    </>
  );
}
