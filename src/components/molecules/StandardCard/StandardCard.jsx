//react
import { Link } from 'react-router';
import BookmarkItem from '@atoms/BookmarkItem/BookmarkItem.jsx';
import MediaCardInfo from '@atoms/MediaCardInfo/MediaCardInfo.jsx';

//assets
import noImageAvailable from '@assets/no_image_available/no_image_available.jpg';

//scss
import stylesStandardCard from './_StandardCard.module.scss';
import styles from '../_Card.module.scss';

//functions
import { getPosterUrl } from '@utils/index.js';


export default function StandardCard({ id, title, posterPath, releaseDate, avgRating, mediaType, video }) {
  const poster = getPosterUrl(posterPath);
  const isMovie = mediaType === 'movie' || video !== undefined;
  const type = isMovie ? 'movie' : 'tv';

  return (
    <article>
      <div className={styles.card}>
        <Link
          className={styles.card__link}
          to={`/${type}/${id}`}
          style={{ backgroundImage: `url(${poster ?? noImageAvailable})` }}
          aria-label={`Go to ${title} ${isMovie ? 'movie' : 'tv show'}`}
        >
          <div className={styles.card__container} />
        </Link>
        <BookmarkItem className={styles.card__button} id={id} type={type} />
      </div>

      <div className={`${styles.card__info} ${stylesStandardCard.text_outside}`}>
        <MediaCardInfo releaseDate={releaseDate} isMovie={isMovie} avgRating={avgRating} />
        <h3 className='text_preset_3 text_white text_capitalize' aria-hidden='true'>{title}</h3>
      </div>
    </article>
  );
}