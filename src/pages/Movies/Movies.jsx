//functions
import getDataAPI from '../../js/api/api.js';

//react libraries and components
import { useState, useEffect } from 'react';
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';

export default function Movies() {
    const [latestMovies, setLatestMovies] = useState([]);
    const [userSearch, setUserSearch] = useState([]);

    useEffect(() => {
        getDataAPI('latest_movies', setLatestMovies);
    }, [])

    //JUST FOR TEST
    useEffect(() => {
        console.log(userSearch)
    }, [userSearch]);

    return (
        <>
            <SearchInput text='movies' fetchedItems={setUserSearch} search='movies' />
            <ContentGrid pageName={'Movies'} isTrending={false} array={latestMovies} />
        </>
    )
}