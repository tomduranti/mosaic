//scss
import styles from './_Player.module.scss';

export default function Player({ search, item }) {
    return (
        <div className={styles.iframe_container}>
            <iframe
                className={styles.iframe}
                src={`https://www.youtube.com/embed/${search}?autoplay=1&controls=1&mute=1&playlist=${search}`}
                title={item.title || item.name}
                allow='autoplay'
            ></iframe>
        </div>
    );
}