//react libraries and components
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import { Link } from "react-router";
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import MediaCard from '../../atoms/MediaCard/MediaCard.jsx';

//scss
import stylesApp from '../../../sass/base/_App.module.scss';
import stylesHome from '../../../pages/Home/_Home.module.scss';

//functions

export default function ContentGrid({ pageName, isTrending, array }) {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        dragFree: true,
        align: 'start',
    }, [Autoplay()])

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.plugins().autoplay?.play()
    }, [array])

    const navigate = useNavigate();

    return (
        <>
            <section className={stylesApp.section}>
                <h2 className={`${stylesApp.section__title}  text_preset_1  text_white`}>{pageName}</h2>

                {isTrending ? (
                    <div className={stylesHome.carousel}>
                        <div className={stylesHome.carousel__viewport} ref={emblaRef}>
                            <ul className={stylesHome.carousel__container}>
                                {array.map(item =>
                                    <li className={stylesHome.carousel__item} key={item.id}>
                                        <Link className={stylesApp.grid__link} to={`/${item.video === false ? 'movie' : 'tv'}/${item.id}`}>
                                            <MediaCard
                                                isTrending={true}
                                                release_date={item.first_air_date || item.release_date}
                                                poster_path={item.poster_path}
                                                media_type={item.media_type}
                                                video={item.video}
                                                avg_rating={item.vote_average}
                                                title={item.title || item.name}
                                            />
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <ul className={stylesApp.grid}>
                        {array.map(item =>
                            <li className={stylesApp.grid__item} key={item.id}>
                                <Link className={stylesApp.grid__link} to={`/${item.video === false ? 'movie' : 'tv'}/${item.id}`}>
                                    <MediaCard
                                        isTrending={false}
                                        release_date={item.first_air_date || item.release_date}
                                        poster_path={item.poster_path}
                                        media_type={item.media_type}
                                        video={item.video}
                                        avg_rating={item.vote_average}
                                        title={item.title || item.name}
                                    />
                                </Link>
                            </li>
                        )}
                    </ul>
                )}
            </section>
        </>
    )
}