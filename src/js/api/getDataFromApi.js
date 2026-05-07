import { options } from './options.js';

export default function getDataFromApi(category, function_wrapper, input='') {

  let url;

  switch (category) {
    case 'search_movie':
      url = new URL('/api/search/movie', window.location.origin);
      url.searchParams.set('query', input);
      break;
    case 'latest_movies':
      url = new URL('/api/trending/movie/day', window.location.origin);
      break;
    case 'recommended_movies':
      url = new URL('/api/movie/top_rated', window.location.origin);
      break;
    case 'search_tv_series':
      url = new URL('/api/search/tv', window.location.origin);
      url.searchParams.set('query', input);
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