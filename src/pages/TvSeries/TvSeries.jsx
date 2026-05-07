//functions
import getDataFromApi from '../../js/api/getDataFromApi.js';

//react libraries and components
import { useState, useEffect } from 'react';
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';
import Loading from '../../components/atoms/Loading/Loading.jsx';

export default function TvSeries({ userInput, setUserInput }) {
    const [latestTvSeries, setLatestTvSeries] = useState([]);

    useEffect(() => {
        getDataFromApi('latest_tv_series', setLatestTvSeries);
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
                : <Loading />
            }
        </>
    )
}