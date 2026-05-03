//functions
import getAPIData from '../../js/api/api.js';

//react libraries and components
import { useState, useEffect } from 'react';
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';

export default function TvSeries() {
    const [latestTvSeries, setLatestTvSeries] = useState([]);

    useEffect(() => {
        getAPIData('latest_tv_series', setLatestTvSeries);
    }, [])

    return (
        <>
            <SearchInput text='TV series' arraysToSearch={[...latestTvSeries]}/>
            <ContentGrid pageName={'TV series'} isTrending={false} array={latestTvSeries} />
        </>
    )
}