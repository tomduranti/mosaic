//react libraries and components
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from "react-router";
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';
import Loading from '../../components/atoms/Loading/Loading.jsx';

export default function BookmarkMedia() {
    const [movies, setMovies] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isSearchButtonPressed, setIsSearchButtonPressed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (userInput && isSearchButtonPressed) {
            navigate(`search?q=${userInput}&type=bookmarked`);
        }
    }, [isSearchButtonPressed]);

    useEffect(() => {
        setIsSearchButtonPressed(false);
    }, [userInput]);

    return (
        <>
            <SearchInput
                text='bookmarked items'
                userInput={userInput}
                setUserInput={setUserInput}
                setIsSearchButtonPressed={setIsSearchButtonPressed}
            />
            <Outlet context={{ userInput, movies, setMovies, setIsSearchButtonPressed }} />
        </>
    )
}