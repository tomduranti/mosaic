//functions
import getDataFromApi from '../../js/api/getDataFromApi.js';

//react libraries and components
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from "react-router";
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';
import Loading from '../../components/atoms/Loading/Loading.jsx';

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isSearchButtonPushed, setIsSearchButtonPushed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (userInput && isSearchButtonPushed) {
            navigate(`search?q=${userInput}&type=movie`);
        }
    }, [isSearchButtonPushed]);

    return (
        <>
            <SearchInput
                text='movies'
                userInput={userInput}
                setUserInput={setUserInput}
                setIsSearchButtonPushed={setIsSearchButtonPushed}
            />
            <Outlet context={{ userInput, movies, setMovies, setIsSearchButtonPushed }} />
        </>
    )
}