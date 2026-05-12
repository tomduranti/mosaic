//functions
import getDataFromApi from '../../js/api/getDataFromApi.js';
import fisherYatesShuffle from '../../js/utils/shuffle/shuffle.js';

//react libraries and components
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from "react-router";
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';
import Loading from '../../components/atoms/Loading/Loading.jsx';

export default function Home() {
    const [userInput, setUserInput] = useState('');
    const [isSearchButtonPushed, setIsSearchButtonPushed] = useState(false);
    const [trending, setTrending] = useState([]);
    const [movieAndTvSeries, setMovieAndTvSeries] = useState({
        movies: [],
        tv_series: []
    });
    const shuffleMovieAndTvSeries = fisherYatesShuffle([...movieAndTvSeries.movies, ...movieAndTvSeries.tv_series]);
    const navigate = useNavigate();

    useEffect(() => {
        if (userInput && isSearchButtonPushed) {
            navigate(`search?q=${userInput}&type=multi`);
        }
    }, [isSearchButtonPushed]);

    return (
        <>
            <SearchInput
                text='movies or TV series'
                userInput={userInput}
                setUserInput={setUserInput}
                setIsSearchButtonPushed={setIsSearchButtonPushed}
            />
            <Outlet context={{ userInput, trending, setTrending, setMovieAndTvSeries, shuffleMovieAndTvSeries, setIsSearchButtonPushed }} />
        </>
    );
}