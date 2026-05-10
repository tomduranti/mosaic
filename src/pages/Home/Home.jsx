//functions
import getDataFromApi from '../../js/api/getDataFromApi.js';
import fisherYatesShuffle from '../../js/utils/shuffle/shuffle.js';

//react libraries and components
import { useState, useEffect } from 'react';
import { Outlet } from "react-router";
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';
import Loading from '../../components/atoms/Loading/Loading.jsx';

export default function Home({ userInput, setUserInput, isSearchButtonPushed, setIsSearchButtonPushed }) {
    const [trending, setTrending] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [recommendedTvSeries, setRecommendedTvSeries] = useState([]);
    const recommendedForYou = fisherYatesShuffle([...recommendedMovies, ...recommendedTvSeries]);

    useEffect(() => {
        getDataFromApi('trending', setTrending);
        getDataFromApi('recommended_movies', setRecommendedMovies);
        getDataFromApi('recommended_tv_series', setRecommendedTvSeries);
    }, []);

    return (
        <>
            <SearchInput
                text='movies or TV series'
                type='all'
                userInput={userInput}
                setUserInput={setUserInput}
                setIsSearchButtonPushed={setIsSearchButtonPushed}
            />
            {userInput && isSearchButtonPushed
                ? <Outlet />
                : trending.length > 0 && recommendedForYou.length > 0
                    ? <>
                        <ContentGrid pageName={'Trending'} isTrending={true} array={trending} />
                        <ContentGrid pageName={'Recommended for you'} isTrending={false} array={recommendedForYou} />
                    </>
                    : <Loading />
            }
        </>
    );
}