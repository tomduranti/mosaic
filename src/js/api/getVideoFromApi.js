import { options } from './options.js';

export default function getVideoFromApi(function_wrapper, type, id) {

    const url = new URL(`/api/${type}/${id}/videos`, window.location.origin);

    return fetch(url, options)
        .then(res => res.json())
        .then(res => function_wrapper(res.results))
        .catch(err => console.error(err));
}