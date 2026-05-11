//functions
import getDataFromApi from '../../js/api/getDataFromApi.js';

//react libraries and components
import { useState, useEffect } from 'react';
import { Outlet } from "react-router";
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';
import Loading from '../../components/atoms/Loading/Loading.jsx';

export default function TvSeries({ userInput, setUserInput, isSearchButtonPushed, setIsSearchButtonPushed }) {
    const [tvSeries, setTvSeries] = useState([]);

    useEffect(() => {
        getDataFromApi('latest_tv_series', setTvSeries);
    }, [])

    return (
        <>
            <SearchInput
                text='TV series'
                type='tv'
                userInput={userInput}
                setUserInput={setUserInput}
                setIsSearchButtonPushed={setIsSearchButtonPushed}
            />

            {userInput && isSearchButtonPushed
                ? <Outlet />
                : tvSeries.length > 0
                    ? <ContentGrid pageName={'TV Series'} isTrending={false} array={tvSeries} />
                    : <Loading />
            }
        </>
    )
}