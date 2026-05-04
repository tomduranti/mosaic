//functions
import getDataAPI from '../../js/api/api.js';

//react libraries and components
import { useState, useEffect } from 'react';
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';

export default function TvSeries() {
    const [latestTvSeries, setLatestTvSeries] = useState([]);
    const [userSearch, setUserSearch] = useState([]);

    useEffect(() => {
        getDataAPI('latest_tv_series', setLatestTvSeries);
    }, [])

    //JUST FOR TEST
    useEffect(() => {
        console.log(userSearch)
    }, [userSearch]);

    return (
        <>
            <SearchInput text='TV series' fetchedItems={setUserSearch} search='tv_series' />
            <ContentGrid pageName={'TV Series'} isTrending={false} array={latestTvSeries} />
        </>
    )
}