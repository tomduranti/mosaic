//react libraries and components
import { useState, useEffect } from 'react';
import { useOutletContext, useSearchParams } from 'react-router';
import CardGridLayout from '@templates/CardGridLayout/CardGridLayout.jsx';
import Loading from '@atoms/Loading/Loading.jsx';

//functions
import getDataFromApi from '@utils/getDataFromApi.js';

export default function HomeSearch() {
    const [userSearch, setUserSearch] = useState([]);
    const [searchParams] = useSearchParams();
    //reading parameter q from url to keep url path intact VS useState being destroyed upon page refresh
    const query = searchParams.get('q');

    const { setIsSearchButtonPressed } = useOutletContext();
    //this filtered array to exclude meaningless results
    const filteredUserSearch = userSearch.filter(item => item.vote_average !== 0);

    useEffect(() => {
        setIsSearchButtonPressed(false);
    }, [])

    useEffect(() => {
        getDataFromApi('multi', setUserSearch, query);
    }, [query])

    return (
        <>
            {filteredUserSearch.length > 0
                ? <CardGridLayout pageName={`Found ${filteredUserSearch.length} ${filteredUserSearch.length === 1 ? 'result' : 'results'} for '${query.trim()}'`} isTrending={false} array={filteredUserSearch} />
                : <Loading />
            }
        </>
    );
};