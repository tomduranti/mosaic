//react libraries and components
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from "react-router";
import { Helmet } from 'react-helmet-async';
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';
import Loading from '../../components/atoms/Loading/Loading.jsx';

//functions
import getDataFromApi from '../../js/api/getDataFromApi.js';

export default function TvSeries() {
    const [tvSeries, setTvSeries] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isSearchButtonPressed, setIsSearchButtonPressed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (userInput && isSearchButtonPressed) {
            navigate(`search?q=${userInput}&type=tv`);
        }
    }, [isSearchButtonPressed]);

    useEffect(() => {
        setIsSearchButtonPressed(false);
    }, [userInput]);

    return (
        <>
            <Helmet>
                <title>TV Series page</title>
            </Helmet>

            <SearchInput
                text='TV series'
                type='tv'
                userInput={userInput}
                setUserInput={setUserInput}
                setIsSearchButtonPressed={setIsSearchButtonPressed}
            />
            <Outlet context={{ userInput, tvSeries, setTvSeries, setIsSearchButtonPressed }} />
        </>
    )
}