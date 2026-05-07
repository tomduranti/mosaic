//functions
import getDetailFromApi from '../../js/api/getDetailFromApi.js';

//react libraries and components
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function Details() {
    const [mediaDetails, setMediaDetails] = useState([]);
    const { id, type } = useParams();

    useEffect(() => {
        getDetailFromApi(setMediaDetails, type, id);
    }, [id])

    return (
        <>
            <span className='text_white'>This is the details page</span>
        </>
    )
}