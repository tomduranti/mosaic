//react
import ChildPageSearch from '@templates/ChildPageSearch/ChildPageSearch.jsx';


export default function TvSeriesSearch() {
    return <ChildPageSearch queryKey='search, tv' apiSearch='search_tv_series' />;
};