//functions
import getDataAPI from '../../js/api/api.js';
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
    //user inputs from research bar
    const [userInput, setUserInput] = useState('');
    const [storeUserInput, setStoreUserInput] = useState([]);

    const result =  storeUserInput.length === 1 ? 'result' : 'results';

    useEffect(() => {
        getDataAPI('trending', setTrending);
        getDataAPI('recommended_movies', setRecommendedMovies);
        getDataAPI('recommended_tv_series', setRecommendedTvSeries);
    }, []);

        useEffect(() => {
        console.log(storeUserInput)
    }, [storeUserInput]);

    return (
        <>
            <SearchInput text='movies or TV series'
                fetchedItems={setStoreUserInput}
                search='global'
                userInput={userInput}
                setUserInput={setUserInput}
            />
            {storeUserInput && userInput.length > 0 ?
                (
                    <ContentGrid pageName={`Found ${storeUserInput.length} ${result} for '${userInput}'`} isTrending={false} array={storeUserInput} />
                ) : (
                    <>
                        <ContentGrid pageName={'Trending'} isTrending={true} array={trending} />
                        <ContentGrid pageName={'Recommended for you'} isTrending={false} array={recommendedForYou} />
                    </>
                )
            }
        </>
    );
}