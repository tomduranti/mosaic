//react
import { useMemo } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import Loading from '@atoms/Loading/Loading.jsx';
import BookmarkItem from '@atoms/BookmarkItem/BookmarkItem.jsx';
import Player from '@atoms/Player/Player.jsx';
import ProgressCircle from '@atoms/ProgressCircle/ProgressCircle.jsx';

//sass
import styles from './_Details.module.scss';
import '@base/_base.scss';
import '@abstract/_utils.scss';

//functions
import { formatYear, formatRuntime, randomiseIndex, getDataFromApi } from '@utils/index.js';


export default function Details() {
  const { id, type } = useParams();

  const details = useQuery({
    queryKey: ['details', type, id],
    queryFn: () => getDataFromApi('details', '', type, id),
  });

  const videos = useQuery({
    queryKey: ['trailer', type, id],
    queryFn: () => getDataFromApi('trailer', '', type, id),
  });

  const key = useMemo(() => {
    if (!videos.data?.length) return '';
    const trailers = videos.data.filter(video => video.type === 'Trailer');
    const teasers = videos.data.filter(video => video.type === 'Teaser');
    const pool = trailers.length ? trailers : teasers;
    if (!pool.length) return '';
    return pool.length === 1 ? pool[0].key : pool[randomiseIndex(pool)].key;
  }, [videos.data]);

  if (details.isPending || videos.isPending) return <Loading />;

  const mediaDetails = details.data;
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
            <BookmarkItem id={id} type={type} />
          </div>
          <p className={`${styles.media__overview}  text_preset_3--light  text_white`}>{mediaParagraph}</p>
        </div>
      </section>
    </>
  );
}