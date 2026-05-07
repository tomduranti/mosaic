export default function getAPIData(category, function_wrapper) {

  let url;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `${import.meta.env.VITE_API_KEY}`,
    }
  };

  switch (category) {
    case 'search_movie':
      url = new URL('/api/search/movie', window.location.origin);
      url.searchParams.set('query', userInput);
      break;
    case 'latest_movies':
      url = new URL('/api/trending/movie/day', window.location.origin);
      break;
    case 'recommended_movies':
      url = new URL('/api/movie/top_rated', window.location.origin);
      break;
    case 'search_tv_series':
      url = new URL('/api/search/tv', window.location.origin);
      url.searchParams.set('query', userInput);
      break;
    case 'latest_tv_series':
      url = new URL('/api/trending/tv/day', window.location.origin);
      break;
    case 'recommended_tv_series':
      url = new URL('/api/tv/popular', window.location.origin);
      break;
    case 'trending':
      url = new URL('/api/trending/all/week', window.location.origin);
      break;
  }

  return fetch(url, options)
    .then(res => res.json())
    .then(res => function_wrapper(res.results))
    .catch(err => console.error(err));
}