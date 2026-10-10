//react libraries and components
import ChildPagePopular from '@templates/ChildPagePopular/ChildPagePopular.jsx';


export default function MoviesPopular() {
    return <ChildPagePopular queryKey='recommended, tv' apiKeyword='recommended_tv_series' pageName='TV Series' />;
}