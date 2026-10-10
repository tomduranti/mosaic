//react
import ChildPagePopular from '@templates/ChildPagePopular/ChildPagePopular.jsx';


export default function MoviesPopular() {
    return <ChildPagePopular queryKey='recommended, movies' apiKeyword='recommended_movies' pageName='Movies' />;
}