//react libraries and components
import { useOutletContext } from 'react-router';
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import Loading from '../../components/atoms/Loading/Loading.jsx';

export default function BookmarkMediaDisplay() {
  const { bookmarkedMedia, isLoading } = useOutletContext();

  const isMovie = (item) =>
    item.media_type === 'movie' || item.video !== undefined;

  const movies = bookmarkedMedia.filter(isMovie);
  const tvShows = bookmarkedMedia.filter((item) => !isMovie(item));
  const isArray = movies.length > 0 || tvShows.length > 0;

  return (
    <>
      {!isLoading ? (
        isArray ? (
          <>
            {movies.length > 0 && (
              <ContentGrid
                pageName={'Bookmarked movies'}
                isTrending={false}
                array={movies}
              />
            )}
            {tvShows.length > 0 && (
              <ContentGrid
                pageName={'Bookmarked TV shows'}
                isTrending={false}
                array={tvShows}
              />
            )}
          </>
        ) : (
          <p className='text_preset_2 text_white'>
            There are no bookmarked items
          </p>
        )
      ) : (
        <Loading />
      )}
    </>
  );
}
