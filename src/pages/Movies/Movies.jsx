//functions
import getDataAPI from '../../js/api/api.js';

//react libraries and components
import { useState, useEffect } from 'react';
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';

export default function Movies({ userInput, setUserInput }) {
    const [latestMovies, setLatestMovies] = useState([]);

    useEffect(() => {
        getDataAPI('latest_movies', setLatestMovies);
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
                : <span className='text_preset_1  text_white--opaque_50'>Loading...</span>
            }
        </>
    )
}