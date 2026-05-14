import { useState, useEffect } from 'react';
import { useOutletContext, useSearchParams } from "react-router";
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';
import Loading from '../../components/atoms/Loading/Loading.jsx';

//functions
import getDataFromApi from '../../js/api/getDataFromApi.js';

export default function MoviesSearch() {
    const [userSearch, setUserSearch] = useState([]);
    const [searchParams] = useSearchParams();
    //reading parameter q from url to keep url path intact VS useState being destroyed upon page refresh
    const query = searchParams.get('q');

    const { setIsSearchButtonPressed } = useOutletContext();

    useEffect(() => {
        setIsSearchButtonPressed(false);
    }, [])

    useEffect(() => {
        getDataFromApi('search_movie', setUserSearch, query);
    }, [query])

    return (
        <>
            {userSearch.length > 0
                ? <ContentGrid pageName={`Found ${userSearch.length} ${userSearch.length === 1 ? 'result' : 'results'} for '${query.trim()}'`} isTrending={false} array={userSearch} />
                : <Loading />
            }
        </>
    );
};