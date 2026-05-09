//functions
import getDataFromApi from '../../js/api/getDataFromApi.js';

//react libraries and components
import { useState, useEffect } from 'react';
import { Outlet } from "react-router";
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';
import Loading from '../../components/atoms/Loading/Loading.jsx';

export default function Movies({ userInput, setUserInput }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getDataFromApi('latest_movies', setMovies);
    }, [])

    return (
        <>
            <SearchInput
                text='movies'
                type='movie'
                userInput={userInput}
                setUserInput={setUserInput}
            />
            <Outlet />
            {movies.length > 0
                ? <ContentGrid pageName={'Movies'} isTrending={false} array={movies} media_type='movie'/>
                : <Loading />
            }
        </>
    )
}