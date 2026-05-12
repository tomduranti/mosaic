//react libraries and components
import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router";
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';
import Loading from '../../components/atoms/Loading/Loading.jsx';

//functions
import getDataFromApi from '../../js/api/getDataFromApi.js';

export default function Search({ userInput, setUserInput }) {
    const [userSearch, setUserSearch] = useState([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const type = searchParams.get('type');
    const text =
           type === 'multi' && 'movies or TV series'
        || type === 'movies' && 'movies'
        || type === 'tv_series' && 'TV Series';

    useEffect(() => {
        switch (type) {
            case 'multi':
                getDataFromApi('multi', setUserSearch, query);
                break;
            case 'movie':
                getDataFromApi('search_movie', setUserSearch, query);
                break;
            case 'tv':
                getDataFromApi('search_tv_series', setUserSearch, query);
                break;
        }
    }, [query])

    return (
        <>
            {userSearch
                ? <ContentGrid pageName={`Found ${userSearch.length} ${userSearch.length === 1 ? 'result' : 'results'} for '${query}'`} isTrending={false} array={userSearch} />
                : <Loading />
            }
        </>
    )
}
