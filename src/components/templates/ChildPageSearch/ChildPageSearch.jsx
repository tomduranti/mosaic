//react
import { useSearchParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import CardGridLayout from '@templates/CardGridLayout/CardGridLayout.jsx';
import Loading from '@atoms/Loading/Loading.jsx';

//functions
import { getDataFromApi } from '@utils/index.js';

export default function ChildPageSearch({ queryKey, apiSearch }) {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const { data, isPending } = useQuery({ queryKey: [queryKey], queryFn: () => getDataFromApi(apiSearch, query) });

    if (isPending) return <Loading />;

    return <CardGridLayout pageName={`Found ${data.length} ${data.length === 1 ? 'result' : 'results'} for '${query.trim()}'`} array={data} />;
};