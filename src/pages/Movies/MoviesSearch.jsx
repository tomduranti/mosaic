//react
import ChildPageSearch from '@templates/ChildPageSearch/ChildPageSearch.jsx';


export default function MoviesSearch() {
    return <ChildPageSearch queryKey='search, movies' apiSearch='search_movie' />;
};