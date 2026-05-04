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

    const result = storeUserInput.length === 1 ? 'result' : 'results';

    useEffect(() => {
        getDataAPI('trending', setTrending);
        getDataAPI('recommended_movies', setRecommendedMovies);
        getDataAPI('recommended_tv_series', setRecommendedTvSeries);
    }, []);

    return (
        <>
            <SearchInput text='movies or TV series'
                fetchedItems={setStoreUserInput}
                search='global'
                userInput={userInput}
                setUserInput={setUserInput}
            />
            {/* {storeUserInput  ?
                (
                    <ContentGrid pageName={`Found ${storeUserInput.length} ${result} for '${userInput}'`} isTrending={false} array={storeUserInput} />
                ) : (
                    <>
                        <ContentGrid pageName={'Trending'} isTrending={true} array={trending} />
                        <ContentGrid pageName={'Recommended for you'} isTrending={false} array={recommendedForYou} />
                    </>
                )
            } */}
            {trending.length > 0
                ? <ContentGrid pageName={'Trending'} isTrending={true} array={trending} />
                : <span className='text_preset_1  text_white--opaque_50'>Loading...</span>
            }

            {recommendedForYou.length > 0
                ? <ContentGrid pageName={'Recommended for you'} isTrending={false} array={recommendedForYou} />
                : <span className='text_preset_1  text_white--opaque_50'>Loading...</span>
            }

        </>
    );
}