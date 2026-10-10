//react libraries and components
import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import CardGridLayout from '@templates/CardGridLayout/CardGridLayout.jsx';
import CarouselCardGrid from '@organisms/CarouselCardGrid/CarouselCardGrid.jsx';
import Loading from '@atoms/Loading/Loading.jsx';

//functions
import { getDataFromApi, shuffleArray } from '@utils/index.js';


export default function HomePopular() {
    const carousel = useQuery({ queryKey: ['carousel'], queryFn: () => getDataFromApi('trending') });
    const movies = useQuery({ queryKey: ['trending', 'movies'], queryFn: () => getDataFromApi('trending_movies') });
    const tvSeries = useQuery({ queryKey: ['trending', 'tv'], queryFn: () => getDataFromApi('trending_tv_series') });

    const shuffled = useMemo(() => {
        if (!movies.data || !tvSeries.data) return [];
        return shuffleArray([...movies.data, ...tvSeries.data]);
    }, [movies.data, tvSeries.data]);

    if (carousel.isPending || movies.isPending || tvSeries.isPending) return <Loading />;

    return (
        <>
            <CarouselCardGrid array={carousel.data} jump={['recommended', 'trending']} />
            <CardGridLayout pageName={'Recommended for you'} array={shuffled} />
        </>
    );
}