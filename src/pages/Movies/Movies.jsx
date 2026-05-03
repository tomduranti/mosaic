//functions
import getAPIData from '../../js/api/api.js';

//react libraries and components
import { useState, useEffect } from 'react';
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';

export default function Movies() {
    const [latestMovies, setLatestMovies] = useState([]);

    useEffect(() => {
        getAPIData('latest_movies', setLatestMovies);
    }, [])

    return (
        <>
            <SearchInput text='movies' arraysToSearch={[...latestMovies]}/>
            <ContentGrid pageName={'movies'} isTrending={false} array={latestMovies} />
        </>
    )
}