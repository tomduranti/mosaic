import { options } from './options.js';

export default async function getDataFromApi(category, functionWrapper, input, type, id) {

  let url;

  switch (category) {
    //Home.jsx
    case 'trending':
      url = new URL('https://api.themoviedb.org/3/trending/all/week');
      break;
    case 'trending_movies':
      url = new URL('https://api.themoviedb.org/3/trending/movie/day');
      break;
    case 'trending_tv_series':
      url = new URL('https://api.themoviedb.org/3/trending/tv/day');
      break;
    case 'multi':
      url = new URL('https://api.themoviedb.org/3/search/multi');
      url.searchParams.set('query', input);
      break;

    //Movies.jsx
    case 'recommended_movies':
      url = new URL('https://api.themoviedb.org/3/movie/popular');
      break;
    case 'search_movie':
      url = new URL('https://api.themoviedb.org/3/search/movie');
      url.searchParams.set('query', input);
      break;

    //TvSeries.jsx
    case 'recommended_tv_series':
      url = new URL('https://api.themoviedb.org/3/tv/popular');
      break;
    case 'search_tv_series':
      url = new URL('https://api.themoviedb.org/3/search/tv');
      url.searchParams.set('query', input);
      break;

    //Details.jsx
    case 'details':
      url = new URL(`https://api.themoviedb.org/3/${type}/${id}`);
      break;
    case 'trailer':
      url = new URL(`https://api.themoviedb.org/3/${type}/${id}/videos`);
      break;
  }

  return await fetch(url, options)
    .then(res => res.json())
    .then(res => functionWrapper(res.results ?? res))
    .catch(err => console.error(err));
}