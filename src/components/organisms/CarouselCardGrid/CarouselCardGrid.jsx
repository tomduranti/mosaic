//react
import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import TrendingCard from '@molecules/TrendingCard/TrendingCard.jsx';

//scss
import styles from './_CarouselCardGrid.module.scss';


export default function CarouselCardGrid({ array, jump }) {
    const [idSkipToSection, idJumpBackToSection] = jump;

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: false,
            dragFree: true,
            align: 'start',
        },
        [Autoplay()],
    );

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.plugins().autoplay?.play();
    }, [array]);

    const cards = array.map(item => (
        <li
            className={styles.carousel__item}
            key={item.id}
            role='group'
            aria-roledescription='Movie or TV show card'
            aria-label={item.title || item.name}
        >
            <TrendingCard
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
        <div className={styles.carousel}>
            <div className={styles.carousel__viewport} ref={emblaRef}>
                <ul className={styles.carousel__container} role='region' aria-roledescription='carousel' aria-label='Carousel of trending items' id={idJumpBackToSection}>
                    {/* This link is just for screen readers */}
                    {idSkipToSection && idJumpBackToSection ? (
                        <a
                            className='display_contents'
                            href={`#${idSkipToSection}`}
                            aria-label='skip to the next section'
                        ></a>
                    ) : null}
                    {cards}
                </ul>
            </div>
        </div>
    );
}