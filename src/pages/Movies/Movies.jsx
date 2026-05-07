//functions
import getDataFromApi from '../../js/api/getDataFromApi.js';

//react libraries and components
import { useState, useEffect } from 'react';
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';
import Loading from '../../components/atoms/Loading/Loading.jsx';

export default function Movies({ userInput, setUserInput }) {
    const [latestMovies, setLatestMovies] = useState([]);

    useEffect(() => {
        getDataFromApi('latest_movies', setLatestMovies);
    }, [])

    return (
        <>
            <SearchInput
                text='movies'
                type='movies'
                userInput={userInput}
                setUserInput={setUserInput}
            />
            {latestMovies.length > 0
                ? <ContentGrid pageName={'Movies'} isTrending={false} array={latestMovies} />
                : <Loading />
            }
        </>
    )
}