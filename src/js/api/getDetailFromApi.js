import { options } from './options.js';

export default function getDetailFromApi(function_wrapper, type, id) {

    const url = new URL(`/api/${type}/${id}`, window.location.origin);

    return fetch(url, options)
        .then(res => res.json())
        .then(res => function_wrapper(res))
        .catch(err => console.error(err));
}