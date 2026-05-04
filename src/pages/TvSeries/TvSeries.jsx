//functions
import getDataAPI from '../../js/api/api.js';

//react libraries and components
import { useState, useEffect } from 'react';
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';

export default function TvSeries({ userInput, setUserInput }) {
    const [latestTvSeries, setLatestTvSeries] = useState([]);

    useEffect(() => {
        getDataAPI('latest_tv_series', setLatestTvSeries);
    }, [])

    return (
        <>
            <SearchInput
                text='TV series'
                type='tv_series'
                userInput={userInput}
                setUserInput={setUserInput}
            />
            {latestTvSeries.length > 0
                ? <ContentGrid pageName={'TV Series'} isTrending={false} array={latestTvSeries} />
                : <span className='text_preset_1  text_white--opaque_50'>Loading...</span>
            }
        </>
    )
}