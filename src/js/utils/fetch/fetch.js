import getDataFromApi from '../../api/getDataFromApi.js'

export default function fetchMediaAPI(callback, query, search) {

    switch (search) {
        case 'all':
            getDataFromApi('search_movie', callback, query);
            getDataFromApi('search_tv_series', callback, query);
            break;
        case 'movie':
            getDataFromApi('search_movie', callback, query);
            break;
        case 'tv':
            getDataFromApi('search_tv_series', callback, query);
            break;
    }
}