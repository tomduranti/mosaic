//functions
import getDataAPI from '../../js/api/api.js';

//react libraries and components
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function Details() {
    const [mediaDetails, setMediaDetails] = useState([]);
    const { id, type } = useParams();

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: '',
                }
            };

            fetch(`https://api.themoviedb.org/3/${type}/${id}?language=en-US`, options)
            .then(res => res.json())
            .then(res => setMediaDetails(res))
            .catch(err => console.error(err));
    }, [id])

    return (
        <>
            <span className='text_white'>This is the details page</span>
        </>
    )
}