//react
import { Link } from 'react-router';
import BookmarkItem from '@atoms/BookmarkItem/BookmarkItem.jsx';
import MediaCardInfo from '@atoms/MediaCardInfo/MediaCardInfo.jsx';

//assets
import noImageAvailable from '@assets/no_image_available/no_image_available.jpg';

//sass
import styles from '../_Card.module.scss';
import variables from '@abstract/_export.module.scss';

//functions
import { getPosterUrl } from '@utils/index.js';


export default function TrendingCard({ id, title, posterPath, releaseDate, avgRating, mediaType, video }) {
    const poster = getPosterUrl(posterPath);
    const background = poster ? `${variables.gradient}, url(${poster})` : `url(${noImageAvailable})`;
    const isMovie = mediaType === 'movie' || video !== undefined;
    const type = isMovie ? 'movie' : 'tv';

    return (
        <article className={`${styles.card} ${styles['card--bigger']}`}>
            <Link
                className={styles.card__link}
                to={`/${type}/${id}`}
                style={{ backgroundImage: background }}
                aria-label={`Go to ${title} ${isMovie ? 'movie' : 'tv show'}`}
            >
                <div className={`${styles.card__container} ${styles['card__container--bigger']}`}>
                    <div className={styles.card__info}>
                        <MediaCardInfo releaseDate={releaseDate} isMovie={isMovie} avgRating={avgRating} bigger />
                        <h3 className='text_preset_3 text_white text_capitalize' aria-hidden='true'>{title}</h3>
                    </div>
                </div>
            </Link>
            <BookmarkItem className={styles.card__button} id={id} type={type} />
        </article>
    );
}