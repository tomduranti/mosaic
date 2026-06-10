//react libraries and components
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from "react-router";
import DocumentTitle from 'react-document-title';
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';
import Loading from '../../components/atoms/Loading/Loading.jsx';

//functions
import getDataFromApi from '../../js/api/getDataFromApi.js';

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isSearchButtonPressed, setIsSearchButtonPressed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (userInput && isSearchButtonPressed) {
            navigate(`search?q=${userInput}&type=movie`);
        }
    }, [isSearchButtonPressed]);

    useEffect(() => {
        setIsSearchButtonPressed(false);
    }, [userInput]);

    return (
        <DocumentTitle title='Movie page'>
            <SearchInput
                text='movies'
                userInput={userInput}
                setUserInput={setUserInput}
                setIsSearchButtonPressed={setIsSearchButtonPressed}
            />
            <Outlet context={{ userInput, movies, setMovies, setIsSearchButtonPressed }} />
        </DocumentTitle>
    )
}