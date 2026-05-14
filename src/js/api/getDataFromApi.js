import { options } from './options.js';

export default async function getDataFromApi(category, function_wrapper, input, type, id) {

  let url;

  switch (category) {
    //Home.jsx
    case 'trending':
      url = new URL('/api/trending/all/week', window.location.origin);
      break;
    case 'trending_movies':
      url = new URL('/api/trending/movie/day', window.location.origin);
      break;
    case 'trending_tv_series':
      url = new URL('/api/trending/tv/day', window.location.origin);
      break;
    case 'multi':
      url = new URL('/api/search/multi', window.location.origin);
      url.searchParams.set('query', input);
      break;

    //Movies.jsx
    case 'recommended_movies':
      url = new URL('/api/movie/popular', window.location.origin);
      break;
    case 'search_movie':
      url = new URL('/api/search/movie', window.location.origin);
      url.searchParams.set('query', input);
      break;

    //TvSeries.jsx
    case 'recommended_tv_series':
      url = new URL('/api/tv/popular', window.location.origin);
      break;
    case 'search_tv_series':
      url = new URL('/api/search/tv', window.location.origin);
      url.searchParams.set('query', input);
      break;

    //Details.jsx
    case 'details':
      url = new URL(`/api/${type}/${id}`, window.location.origin);
      break;
    case 'trailer':
      url = new URL(`/api/${type}/${id}/videos`, window.location.origin);
      break;
  }

  return await fetch(url, options)
    .then(res => res.json())
    .then(res => function_wrapper(res.results ?? res))
    .catch(err => console.error(err));
}