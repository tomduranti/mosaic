//react libraries and components
import { useEffect } from 'react';
import { useOutletContext } from 'react-router';
import CardGridLayout from '@templates/CardGridLayout/CardGridLayout.jsx';
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
                ? <CardGridLayout pageName={'Movies'} isTrending={false} array={movies} />
                : <Loading />
            }
        </>
    )
}