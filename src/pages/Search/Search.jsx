//react libraries and components
import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router";
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';

//functions
import fetchMediaAPI from '../../js/utils/fetch/fetch.js';

export default function Search({ userInput, setUserInput }) {
    const [userSearch, setUserSearch] = useState([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const type = searchParams.get('type');
    const text = type === 'all' && 'movies or TV series'
        || type === 'movies' && 'movies'
        || type === 'tv_series' && 'TV Series';
    const result = userSearch.length === 1 ? 'result' : 'results';

    useEffect(() => {
        fetchMediaAPI(setUserSearch, query, type);
    }, [query])

    return (
        <>
            <SearchInput
                text={text}
                type={type}
                userInput={userInput}
                setUserInput={setUserInput}
            />
            {userSearch
                ? (
                    <ContentGrid pageName={`Found ${userSearch.length} ${result} for '${userInput}'`} isTrending={false} array={userSearch} />
                ) : (
                    <span className='text_preset_1  text_white--opaque_50'>Loading...</span>
                )
            }
        </>
    )
}
