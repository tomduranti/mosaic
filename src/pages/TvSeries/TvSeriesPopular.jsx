//functions
import getDataFromApi from '../../js/api/getDataFromApi.js';

//react libraries and components
import { useEffect } from 'react';
import { useOutletContext } from "react-router";
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import Loading from '../../components/atoms/Loading/Loading.jsx';

export default function TvSeriesPopular() {
    const {tvSeries, setTvSeries} = useOutletContext();

    useEffect(() => {
        getDataFromApi('recommended_tv_series', setTvSeries);
    }, [])

    return (
        <>
            {tvSeries.length > 0
                ? <ContentGrid pageName={'TV Series'} isTrending={false} array={tvSeries} />
                : <Loading />
            }
        </>
    )
}