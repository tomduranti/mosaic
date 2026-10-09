//react
import StandardCard from '@molecules/StandardCard/StandardCard.jsx';

//scss
import styles from './_StandardCardGrid.module.scss';

export default function StandardCardGrid({ array, jump, pageName }) {
    const [idSkipToSection, idJumpBackToSection] = jump;
    const cards = array.map(item => (
        <li
        className={styles.standard_card_grid}
        id={idSkipToSection}
        role='region'
        aria-roledescription={pageName}
        aria-label={`${pageName} section`}
        key={item.id}
        >
            <StandardCard
                releaseDate={item.first_air_date || item.release_date}
                posterPath={item.poster_path}
                mediaType={item.media_type}
                video={item.video}
                id={item.id}
                avgRating={item.vote_average}
                title={item.title || item.name}
            />
        </li>
    ));

    return (
        <ul
            className={styles.standard_card_grid}
            id={idSkipToSection}
            role='region'
            aria-roledescription={pageName}
            aria-label={`${pageName} section`}
        >
            {/* This link is just for screen readers */}
            {idSkipToSection && idJumpBackToSection ? (
                <a
                    className='display_contents'
                    href={`#${idJumpBackToSection}`}
                    aria-label='jump back to the previous section'
                ></a>
            ) : null}
            {cards}
        </ul>
    )
}