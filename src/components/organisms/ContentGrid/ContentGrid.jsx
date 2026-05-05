//react libraries and components
import { useState, useEffect } from 'react';
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import MediaCard from '../../atoms/MediaCard/MediaCard.jsx';

//scss
import stylesApp from '../../../sass/base/_App.module.scss';
import stylesHome from '../../../pages/Home/_Home.module.scss';

export default function ContentGrid({ pageName, isTrending, array }) {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        dragFree: true,
    }, [Autoplay()])

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.plugins().autoplay?.play()
    }, [array])

    return (
        <>
            <section className={stylesApp.section}>
                <h2 className={`${stylesApp.section__title}  text_preset_1  text_white`}>{pageName}</h2>

                {array ? (
                    (isTrending ? (
                        <div className={stylesHome.carousel}>
                            <div className={stylesHome.carousel__viewport} ref={emblaRef}>
                                <ul className={stylesHome.carousel__container}>
                                    {array.map(item =>
                                        <li className={stylesHome.carousel__item} key={item.id}>
                                            <MediaCard
                                                isTrending={true}
                                                release_date={item.first_air_date || item.release_date}
                                                poster_path={item.poster_path}
                                                media_type={item.media_type}
                                                video={item.video}
                                                avg_rating={item.vote_average}
                                                title={item.title || item.name}
                                            />
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <ul className={stylesApp.grid}>
                            {array.map(item =>
                                <li className={stylesApp.grid__item} key={item.id}>
                                    <MediaCard
                                        isTrending={false}
                                        release_date={item.first_air_date || item.release_date}
                                        poster_path={item.poster_path}
                                        media_type={item.media_type}
                                        video={item.video}
                                        avg_rating={item.vote_average}
                                        title={item.title || item.name}
                                    />
                                </li>
                            )}
                        </ul>
                    ))
                ) : (
                    <span className="text_preset_1  text_white--opaque_50">Loading...</span>
                )}
            </section>
        </>
    )
}