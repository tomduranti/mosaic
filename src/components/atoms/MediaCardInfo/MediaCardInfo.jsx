//scss
import styles from './_MediaCardInfo.module.scss';

//assets
import movieIcon from '@assets/category/category_movie.svg';
import tvIcon from '@assets/category/category_tv.svg';

//functions
import { formatYear, separator } from '@utils/index.js';

export default function MediaCardInfo({ releaseDate, isMovie, avgRating, bigger = false }) {
  return (
    <div className={`${styles.media_card_info} ${bigger ? 'text_preset_5' : 'text_preset_6'} text_white--opaque_75`}>
      <span className='separator' aria-hidden='true'>
        {releaseDate ? formatYear(releaseDate) : 'TBA'}
      </span>
      <div className='separator'>
        <img src={isMovie ? movieIcon : tvIcon} alt='' />
        <span className='text_capitalize' aria-hidden='true'>{isMovie ? 'movie' : 'tv'}</span>
      </div>
      <span className='text_uppercase' aria-hidden='true'>
        {avgRating ? avgRating.toFixed(1) : 'N/A'}
      </span>
    </div>
  );
}