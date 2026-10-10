//react libraries and components
import CardGridLayout from '@templates/CardGridLayout/CardGridLayout.jsx';
import Loading from '@atoms/Loading/Loading.jsx';
import { useQuery } from '@tanstack/react-query';

//functions
import { getDataFromApi } from '@utils/index.js';

export default function ChildPagePopular({ queryKey, apiKeyword, pageName }) {
    const { data, isPending } = useQuery({ queryKey: [queryKey], queryFn: () => getDataFromApi(apiKeyword) });
    if (isPending) return <Loading />;
    return <CardGridLayout pageName={pageName} array={data} />;
}