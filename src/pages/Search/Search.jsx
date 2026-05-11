//react libraries and components
import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router";
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';
import Loading from '../../components/atoms/Loading/Loading.jsx';

//functions
import fetchMediaAPI from '../../js/utils/fetch/fetch.js';

export default function Search({ userInput, setUserInput }) {
    const [userSearch, setUserSearch] = useState([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const type = searchParams.get('type');
    const text =
           type === 'all' && 'movies or TV series'
        || type === 'movies' && 'movies'
        || type === 'tv_series' && 'TV Series';
    const result = userSearch.length === 1 ? 'result' : 'results';

    useEffect(() => {
        fetchMediaAPI(setUserSearch, query, type);
    }, [query])

    return (
        <>
            {userSearch
                ? <ContentGrid pageName={`Found ${userSearch.length} ${result} for '${query}'`} isTrending={false} array={userSearch} />
                : <Loading />
            }
        </>
    )
}
