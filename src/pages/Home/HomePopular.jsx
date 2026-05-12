//functions
import getDataFromApi from '../../js/api/getDataFromApi.js';

//react libraries and components
import { useState, useEffect } from 'react';
import { useOutletContext } from "react-router";
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import Loading from '../../components/atoms/Loading/Loading.jsx';

export default function HomePopular() {
    const { trending, setTrending, shuffleMovieAndTvSeries, setMovieAndTvSeries } = useOutletContext();

    useEffect(() => {
        getDataFromApi('trending', setTrending);
        getDataFromApi('trending_movies', data => {
            setMovieAndTvSeries(prev =>
                ({ ...prev, movies: data })
            )
        }
        );
        getDataFromApi('trending_tv_series', data => {
            setMovieAndTvSeries(prev =>
                ({ ...prev, tv_series: data })
            )
        }
        );
    }, []);

    return (
        <>
            {trending.length > 0 && shuffleMovieAndTvSeries.length > 0
                ? <>
                    <ContentGrid pageName={'Trending'} isTrending={true} array={trending} />
                    <ContentGrid pageName={'Recommended for you'} isTrending={false} array={shuffleMovieAndTvSeries} />
                </>
                : <Loading />
            }
        </>
    )
}