//react libraries and components
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import DocumentTitle from 'react-document-title';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Loading from '../../components/atoms/Loading/Loading.jsx';
import BookmarkItem from '../../components/atoms/BookmarkItem/BookmarkItem.jsx';

//sass
import stylesDetail from './_Details.module.scss';
import stylesApp from '../../sass/base/_App.module.scss';
import 'react-circular-progressbar/dist/styles.css';

//functions
import getDataFromApi from '../../js/api/getDataFromApi.js';
import random from '../../js/utils/random/random.js';
import { formatYear, formatRuntime } from '../../js/utils/date/date.js';
import { toPercentage } from '../../js/utils/math/math.js';

export default function Details() {
    const [mediaDetails, setMediaDetails] = useState([]);
    const [video, setVideo] = useState([]);
    const [key, setKey] = useState('');
    const [isKeyEmpty, setIsKeyEmpty] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const { id, type } = useParams();
    let trailer = [];
    let teaser = [];

    const averageVoteColor = () => {
        if ((((mediaDetails.vote_average)?.toPrecision(2)) * 10) < 40) return '#DB2360';
        if ((((mediaDetails.vote_average)?.toPrecision(2)) * 10) < 70) return '#D2D531';
        return '#21D07A';
    };

    useEffect(() => {
        getDataFromApi('details', setMediaDetails, '', type, id);
        getDataFromApi('trailer', setVideo, '', type, id)
            .then(() =>
                setIsLoading(false));
    }, [id])

    useEffect(() => {

        trailer = video.filter(item => item.type === 'Trailer');
        teaser = video.filter(item => item.type === 'Teaser');

        if (video.length > 0 && !isLoading) {
            if (trailer.length !== 0) {
                setIsKeyEmpty(false);
                setKey(trailer.length === 1 ? trailer[0].key : trailer[random(trailer)].key);
            } else if (teaser.length !== 0) {
                setIsKeyEmpty(false);
                setKey(teaser.length === 1 ? teaser[0].key : teaser[random(teaser)].key);
            }
        }

    }, [isLoading])

    function ProgressProvider({ valueStart, valueEnd, children }) {
        const [value, setValue] = useState(valueStart);

        useEffect(() => {
            setValue(valueEnd);
        }, [valueEnd]);

        return children(value);
    };

    return (
        <DocumentTitle title='Details of the selected item'>
            {isLoading
                ? <Loading />
                :
                <section className={`${stylesApp.section}  ${stylesApp['media']}`}>

                    <div className={stylesDetail.media__visual_content}>
                        <iframe className={stylesDetail.iframe}
                            src={`https://www.youtube.com/embed/${key}?autoplay=1&controls=1&mute=1&playlist=${key}`}
                            title={mediaDetails.title || mediaDetails.name}
                            scrolling="auto"
                            allow='autoplay'
                        ></iframe>
                    </div>

                    <div className={stylesDetail.media__body}>
                        <h2 className={`${stylesDetail.media__title}  text_preset_1  text_white`}>{mediaDetails.title || mediaDetails.name}</h2>
                        <div className={stylesDetail.media__genre}>
                            {
                                mediaDetails.genres?.map(item =>
                                    <span className={`text_preset_5  text_preset_5--bigger  text_white`} key={item.id}>{item.name}</span>
                                )
                            }
                        </div>
                        <div className={stylesDetail.media__info}>
                            <div className={stylesDetail.media__detail}>
                                <span className={`${stylesApp.separator}  ${stylesApp['separator--bigger']}  text_preset_5  text_preset_5--bigger  text_white`}>{formatYear(mediaDetails.release_date || mediaDetails.first_air_date) || NaN}</span>
                                <span className={`${stylesApp.separator}  ${stylesApp['separator--bigger']}  text_preset_5  text_preset_5--bigger  text_white`}>{formatRuntime(mediaDetails.runtime) || (mediaDetails.number_of_seasons + `${mediaDetails.number_of_seasons === 1 ? ' season' : ' seasons'}`)}</span>
                                <ProgressProvider valueStart={0} valueEnd={((mediaDetails.vote_average)?.toPrecision(2)) * 10}>
                                    {value => <CircularProgressbar
                                        className={`${stylesDetail.progress_circle}  text_preset_5  text_preset_5--bigger`}
                                        value={value}
                                        text={`${value}%`}
                                        styles={buildStyles({
                                            pathTransitionDuration: 1.5,
                                            strokeLinecap: 'round',
                                            textSize: '32px',
                                            textColor: '#fff',
                                            pathTransitionDuration: 1.5,
                                            pathColor: averageVoteColor(),
                                        })}
                                    />}
                                </ProgressProvider>
                            </div>

                            <div className={stylesDetail.media__info}>
                                <BookmarkItem id={mediaDetails.id} />
                            </div>
                        </div>
                        <p className={`${stylesDetail.media__overview}  text_preset_3--light  text_white`}>{mediaDetails.overview}</p>
                    </div>
                </section>
            }
        </DocumentTitle>
    )
}