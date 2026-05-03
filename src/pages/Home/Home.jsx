//functions
import getAPIData from '../../js/api/api.js';
import fisherYatesShuffle from '../../js/utils/shuffle/shuffle.js';

//react libraries and components
import { useState, useEffect } from 'react';
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';

export default function Home() {
    const [trending, setTrending] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [recommendedTvSeries, setRecommendedTvSeries] = useState([]);

    const recommendedForYou = fisherYatesShuffle([...recommendedMovies, ...recommendedTvSeries]);

    useEffect(() => {
        getAPIData('trending', setTrending);
        getAPIData('recommended_movies', setRecommendedMovies);
        getAPIData('recommended_tv_series', setRecommendedTvSeries);
    }, []);

    return (
        <>
            <SearchInput text='movies or TV series' arraysToSearch={[...trending, ...recommendedMovies, ...recommendedTvSeries]}/>
            <ContentGrid pageName={'trending'} isTrending={true} array={trending} />
            <ContentGrid pageName={'recommended for you'} isTrending={false} array={recommendedForYou} />
        </>
    );
}