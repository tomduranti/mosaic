//react libraries and components
import { useState, useEffect, useMemo } from 'react';
import { Outlet, useNavigate } from "react-router";
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';
import Loading from '../../components/atoms/Loading/Loading.jsx';

//functions
import getDataFromApi from '../../js/api/getDataFromApi.js';
import fisherYatesShuffle from '../../js/utils/shuffle/shuffle.js';

export default function Home() {
    const [userInput, setUserInput] = useState('');
    const [isSearchButtonPressed, setIsSearchButtonPressed] = useState(false);
    const [trending, setTrending] = useState([]);
    const [movieAndTvSeries, setMovieAndTvSeries] = useState({
        movies: [],
        tv_series: []
    });
    const shuffleMovieAndTvSeries = useMemo(() => {
       return fisherYatesShuffle([...movieAndTvSeries.movies, ...movieAndTvSeries.tv_series])
        }, [movieAndTvSeries.movies, movieAndTvSeries.tv_series]
    )
    const navigate = useNavigate();

    useEffect(() => {
        if (userInput && isSearchButtonPressed) {
            navigate(`search?q=${userInput}&type=multi`);
        }
    }, [isSearchButtonPressed]);

    useEffect(() => {
        setIsSearchButtonPressed(false);
    }, [userInput]);

    return (
        <>
            <h1 className='hidden'  >Home page</h1>
            
            <SearchInput
                text='movies or TV series'
                userInput={userInput}
                setUserInput={setUserInput}
                setIsSearchButtonPressed={setIsSearchButtonPressed}
            />
            <Outlet context={{ userInput, trending, setTrending, setMovieAndTvSeries, shuffleMovieAndTvSeries, setIsSearchButtonPressed }} />
        </>
    );
}