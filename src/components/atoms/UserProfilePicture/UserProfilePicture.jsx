//assets
import avatar from '@assets/avatar/avatar.png';

//scss
import styles from './_UserProfilePicture.module.scss';

export default function UserProfilePicture() {
    return (
        <img
            className={styles.avatar}
            src={avatar}
            alt='profile picture'
            tabIndex='0'
            aria-label='change your profile picture'
        />
    );
}