//react libraries and components
import { useEffect } from 'react';
import { useOutletContext } from 'react-router';
import ContentGrid from '@organisms/ContentGrid/ContentGrid.jsx';
import Loading from '@atoms/Loading/Loading.jsx';

//functions
import getDataFromApi from '@utils/getDataFromApi.js';

export default function MoviesPopular() {
    const { movies, setMovies } = useOutletContext();

    useEffect(() => {
        getDataFromApi('recommended_movies', setMovies);
    }, [])

    return (
        <>
            {movies.length > 0
                ? <ContentGrid pageName={'Movies'} isTrending={false} array={movies} />
                : <Loading />
            }
        </>
    )
}