//functions
import getDetailFromApi from '../../js/api/getDetailFromApi.js';
import getVideoFromApi from '../../js/api/getVideoFromApi.js';
import random from '../../js/utils/random/random.js';

//react libraries and components
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Loading from '../../components/atoms/Loading/Loading.jsx';

export default function Details() {
    const [mediaDetails, setMediaDetails] = useState([]);
    const [video, setVideo] = useState([]);
    const [key, setKey] = useState('');
    const [isKeyEmpty, setIsKeyEmpty] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const { id, type } = useParams();
    let trailer = [];
    let teaser = [];

    useEffect(() => {
        getDetailFromApi(setMediaDetails, type, id);
        getVideoFromApi(setVideo, type, id)
            .then(() => setIsLoading(false));
    }, [id])

    useEffect(() => {
        trailer = video.filter(item => item.type === 'Trailer');
        teaser = video.filter(item => item.type === 'Teaser');

        if (video.length > 0 && !isLoading) {
            if (trailer.length !== 0) {
                setKey(trailer.length === 1 ? trailer[0].key : trailer[random(trailer)].key);
                setIsKeyEmpty(false);
            } else if (teaser.length !== 0) {
                setKey(teaser.length === 1 ? teaser[0].key : teaser[random(teaser)].key);
                setIsKeyEmpty(false);
            }
        }
    }, [video, isLoading])

    return (
        <>
            {isLoading
                ? <Loading />
                : (
                    key
                        ? <iframe src={`https://www.youtube.com/embed/${key}`} title="W3Schools Free Online Web Tutorials"></iframe>
                        : <div className="">Trailer Coming Soon</div>

                )
            }
        </>
    )
}