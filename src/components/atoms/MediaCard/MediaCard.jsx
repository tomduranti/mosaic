//react libraries and components
import { Link } from "react-router";
import BookmarkItem from '../BookmarkItem/BookmarkItem.jsx';
import movie from '../../../assets/category/category_movie.svg';
import tv from '../../../assets/category/category_tv.svg';
import noImageAvailable from '../../../assets/no_image_available/no_image_available.jpg';

//sass
import styles from './_MediaCard.module.scss';
import '../../../sass/abstract/_utils.scss';
import variables from '../../../sass/abstract/_export.module.scss';

//functions
import getYearFormat from '../../../js/utils/date/date.js';

export default function MediaCard({ isTrending, release_date, poster_path, media_type, type, id, avg_rating, title }) {

    return (
        <>
            {isTrending ?
                (
                    <article className={`${styles.mediacard}  ${styles['mediacard--trending']}`}>
                        <BookmarkItem className={`${styles.mediacard__button}`} />
                        <Link className={styles.mediacard__link} to={`/${type === false ? 'movie' : 'tv'}/${id}`}>
                            <div className={`${styles.mediacard__container}  ${styles['mediacard__container--trending']}`} style={{ backgroundImage: !poster_path ? `url(${noImageAvailable})` : `${variables.gradient}, url(https://image.tmdb.org/t/p/w500${poster_path})` }}>
                                <div className={styles.mediacard__media_info}>
                                    <div className={`${styles.mediacard__media_date_and_type}  text_preset_5  text_white--opaque_75`}>
                                        <span className={`${styles.separator}  ${styles['separator--trending']}`}>{getYearFormat(release_date)}</span>
                                        <div className={`${styles.mediacard__media_category}  ${styles['separator']}  ${styles['separator--trending']}`}>
                                            <img src={media_type === 'movie' ? movie : tv} alt='' />
                                            <span className='text_capitalize'>{media_type}</span>
                                        </div>
                                        <span className='text_uppercase'>{avg_rating.toFixed(1)}</span>
                                    </div>
                                    <h3 className='text_preset_3  text_white  text_capitalize'>{title}</h3>
                                </div>
                            </div>
                        </Link>
                    </article>
                ) : (
                    <article className={styles.mediacard}>
                        <BookmarkItem className={`${styles.mediacard__button}`} />
                        <Link className={styles.mediacard__link} to={`/${type === false ? 'movie' : 'tv'}/${id}`}>
                            <div className={`${styles.mediacard__container}`} style={{ backgroundImage: !poster_path ? `url(${noImageAvailable})` : `url(https://image.tmdb.org/t/p/w500${poster_path})` }}></div>
                        </Link>

                        <div className={`${styles.mediacard__media_info}  ${styles.mediacard__text_outside}`}>
                            <div className={`${styles.mediacard__media_date_and_type}  text_preset_6  text_white--opaque_75`}>
                                <span className={styles.separator}>{release_date ? getYearFormat(release_date) : 'N/A'}</span>
                                <div className={`${styles.mediacard__media_category}  ${styles['separator']}`}>
                                    <img src={type === false ? movie : tv} alt='' />
                                    <span className='text_capitalize'>{type === false ? 'movie' : 'tv'}</span>
                                </div>
                                <span className='text_uppercase'>{avg_rating.toFixed(1)}</span>
                            </div>
                            <h3 className='text_preset_3  text_white  text_capitalize'>{title}</h3>
                        </div>
                    </article>
                )
            }
        </>
    )
}