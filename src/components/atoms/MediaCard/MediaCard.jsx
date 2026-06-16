//react libraries and components
import { Link } from "react-router";
import BookmarkItem from '../BookmarkItem/BookmarkItem.jsx';
import movie from '../../../assets/category/category_movie.svg';
import tv from '../../../assets/category/category_tv.svg';
import noImageAvailable from '../../../assets/no_image_available/no_image_available.jpg';

//sass
import styles from './_MediaCard.module.scss';
import stylesApp from '../../../sass/base/_App.module.scss';
import '../../../sass/abstract/_utils.scss';
import variables from '../../../sass/abstract/_export.module.scss';

//functions
import { formatYear } from '../../../js/utils/date/date.js';

export default function MediaCard({ isTrending, release_date, poster_path, media_type, video, id, avg_rating, title }) {
    const isMovie = media_type === 'movie' || video !== undefined;

    return (
        <>
            {isTrending ?
                (
                    <article className={`${styles.mediacard}  ${styles['mediacard--bigger']}`}>
                        <Link className={styles.mediacard__link} to={`/${isMovie ? 'movie' : 'tv'}/${id}`} style={{ backgroundImage: !poster_path ? `url(${noImageAvailable})` : `${variables.gradient}, url(https://image.tmdb.org/t/p/w500${poster_path})` }} aria-label={`Go to ${title} ${isMovie ? 'movie' : 'tv show'}`} >
                            <div className={`${styles.mediacard__container}  ${styles['mediacard__container--bigger']}`} >
                                <div className={styles.mediacard__media_info}>
                                    <div className={`${styles.mediacard__media_date_and_type}  text_preset_5  text_white--opaque_75`}>
                                        <span className={`${stylesApp.separator}  ${stylesApp['separator--bigger']}`}  aria-hidden="true">{formatYear(release_date)}</span>
                                        <div className={`${styles.mediacard__media_category}  ${stylesApp['separator']}  ${stylesApp['separator--bigger']}`}>
                                            <img src={isMovie ? movie : tv} alt='' />
                                            <span className='text_capitalize'  aria-hidden="true">{media_type}</span>
                                        </div>
                                        <span className='text_uppercase'  aria-hidden="true">{avg_rating ? avg_rating?.toFixed(1) : 'N/A'}</span>
                                    </div>
                                    <h3 className='text_preset_3  text_white  text_capitalize'  aria-hidden="true">{title}</h3>
                                </div>
                            </div>
                        </Link>
                        <BookmarkItem className={styles.mediacard__button}  id={id}  type={isMovie ? 'movie' : 'tv'} />
                    </article>
                ) : (
                    <>
                        <article >
                            <div className={styles.mediacard}>
                                <Link className={styles.mediacard__link} to={`/${isMovie ? 'movie' : 'tv'}/${id}`} style={{ backgroundImage: !poster_path ? `url(${noImageAvailable})` : `url(https://image.tmdb.org/t/p/w500${poster_path})` }}  aria-label={`Go to ${title} ${isMovie ? 'movie' : 'tv show'}`} >
                                    <div className={styles.mediacard__container} ></div>
                                </Link>
                                <BookmarkItem className={styles.mediacard__button}  id={id} type={isMovie ? 'movie' : 'tv'} />
                            </div>

                            <div className={`${styles.mediacard__media_info}  ${styles.mediacard__text_outside}`}>
                                <div className={`${styles.mediacard__media_date_and_type}  text_preset_6  text_white--opaque_75`}>
                                    <span className={stylesApp.separator}   aria-hidden="true">{release_date ? formatYear(release_date) : 'TBA'}</span>
                                    <div className={`${styles.mediacard__media_category}  ${stylesApp['separator']}`}>
                                        <img src={isMovie ? movie : tv} alt='' />
                                        <span className='text_capitalize'  aria-hidden="true">{isMovie ? 'movie' : 'tv'}</span>
                                    </div>
                                    <span className='text_uppercase'  aria-hidden="true">{avg_rating ? avg_rating?.toFixed(1) : 'N/A'}</span>
                                </div>
                                <h3 className='text_preset_3  text_white  text_capitalize'  aria-hidden="true">{title}</h3>
                            </div>
                        </article>
                    </>
                )
            }
        </>
    )
}