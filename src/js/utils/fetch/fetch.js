import getDataAPI from '../../api/api.js'

export default function fetchMediaAPI(callback, query, search) {

    switch (search) {
        case 'global':
            getDataAPI('search_movie', callback, query);
            getDataAPI('search_tv_series', callback, query);
            break;
        case 'movies':
            getDataAPI('search_movie', callback, query);
            break;
        case 'tv_series':
            getDataAPI('search_tv_series', callback, query);
            break;
    }
}