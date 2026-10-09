//react
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Loading from '@atoms/Loading/Loading.jsx';
import BookmarkItem from '@atoms/BookmarkItem/BookmarkItem.jsx';
import Player from '@atoms/Player/Player.jsx';
import ProgressCircle from '@atoms/ProgressCircle/ProgressCircle.jsx';

//sass
import styles from './_Details.module.scss';
import '@base/_base.scss';
import '@abstract/_utils.scss';

//functions
import { formatYear, formatRuntime, separator, randomiseIndex, getDataFromApi } from '@utils/index.js';


export default function Details() {
  const [mediaDetails, setMediaDetails] = useState({});
  const [video, setVideo] = useState([]);
  const [key, setKey] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { id, type } = useParams();
  const mediaTitle = mediaDetails.title || mediaDetails.name;
  const mediaGenre = mediaDetails.genres?.map(item => (
    <span className={`text_preset_5  text_preset_5--bigger  text_white`} key={item.id}>{item.name}</span>
  ));
  const mediaParagraph = mediaDetails.overview;
  const mediaYear = formatYear(
    mediaDetails.release_date || mediaDetails.first_air_date,
  ) || 'TBA';
  const mediaSeason = formatRuntime(mediaDetails.runtime) ||
    mediaDetails.number_of_seasons +
      `${mediaDetails.number_of_seasons === 1 ? ' season' : ' seasons'}`;
  let trailer = [];
  let teaser = [];


  useEffect(() => {
    getDataFromApi('details', setMediaDetails, '', type, id);
    getDataFromApi('trailer', setVideo, '', type, id).then(() =>
      setIsLoading(false),
    );
  }, [id, type]);

  useEffect(() => {
    trailer = video.filter((item) => item.type === 'Trailer');
    teaser = video.filter((item) => item.type === 'Teaser');

    if (video.length > 0 && !isLoading) {
      if (trailer.length !== 0) {
        setKey(
          trailer.length === 1 ? trailer[0].key : trailer[randomiseIndex(trailer)].key,
        );
      } else if (teaser.length !== 0) {
        setKey(
          teaser.length === 1 ? teaser[0].key : teaser[randomiseIndex(teaser)].key,
        );
      }
    }
  }, [isLoading]);

  if (isLoading) return <Loading />;


  return (
    <>
      <h1 className='hidden' aria-label='Detail page'>Detail page</h1>
      <section className='section_layout'>
        <Player search={key} item={mediaDetails} />
        <div className={styles.media__body}>
          <h2 className={`${styles.media__title}  text_preset_1  text_white`}>{mediaTitle}</h2>
          <div className={styles.media__genre}>{mediaGenre}</div>
          <div className={styles.media__info}>
            <div className={styles.media__detail}>
              <span className={`separator  ${'separator--bigger'}  text_preset_5  text_preset_5--bigger  text_white`}>{mediaYear}</span>
              <span className={`separator  ${'separator--bigger'}  text_preset_5  text_preset_5--bigger  text_white`}>{mediaSeason}</span>
              <ProgressCircle array={mediaDetails} />
            </div>
            <BookmarkItem id={id}  type={type} />
          </div>
          <p className={`${styles.media__overview}  text_preset_3--light  text_white`}>{mediaParagraph}</p>
        </div>
      </section>
    </>
  );
}