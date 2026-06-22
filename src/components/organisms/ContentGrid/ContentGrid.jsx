//react libraries and components
import { useEffect } from "react";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import MediaCard from "../../atoms/MediaCard/MediaCard.jsx";

//scss
import stylesApp from "../../../sass/base/_App.module.scss";
import stylesHome from "../../../pages/Home/_Home.module.scss";

//functions
import { formatYear } from "../../../utils/date.js";

export default function ContentGrid({
  pageName,
  isTrending,
  array,
  idSkipToSection,
  idJumpBackToSection,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      dragFree: true,
      align: "start",
    },
    [Autoplay()],
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.plugins().autoplay?.play();
  }, [array]);

  return (
    <>
      <section className={stylesApp.section}>
        <h2
          className={`${stylesApp.section__title}  text_preset_1  text_white`}
        >
          {pageName}
        </h2>

        {isTrending ? (
          <div className={stylesHome.carousel}>
            <div className={stylesHome.carousel__viewport} ref={emblaRef}>
              <ul
                className={stylesHome.carousel__container}
                role="region"
                aria-roledescription="carousel"
                aria-label="Carousel of trending items"
                id={idJumpBackToSection}
              >
                {/* This link is just for screen readers */}
                {idSkipToSection && idJumpBackToSection ? (
                  <a
                    className="display_contents"
                    href={`#${idSkipToSection}`}
                    aria-label="skip to the next section"
                  ></a>
                ) : null}

                {array.map((item) => (
                  <li
                    className={stylesHome.carousel__item}
                    key={item.id}
                    role="group"
                    aria-roledescription="Movie or TV show card"
                    aria-label={item.title || item.name}
                  >
                    <MediaCard
                      isTrending={true}
                      release_date={item.first_air_date || item.release_date}
                      poster_path={item.poster_path}
                      media_type={item.media_type}
                      video={item.video}
                      id={item.id}
                      avg_rating={item.vote_average}
                      title={item.title || item.name}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <ul
            className={stylesApp.grid}
            id={idSkipToSection}
            role="region"
            aria-roledescription={pageName}
            aria-label={`${pageName} section`}
          >
            {/* This link is just for screen readers */}
            {idSkipToSection && idJumpBackToSection ? (
              <a
                className="display_contents"
                href={`#${idJumpBackToSection}`}
                aria-label="jump back to the previous section"
              ></a>
            ) : null}

            {array.map((item) => (
              <li
                className={stylesApp.grid__item}
                key={item.id}
                aria-label={`Title: ${item.title || item.name}, ${item.media_type === "movie" || item.video !== undefined ? "movie" : "tv show"}, year: ${formatYear(item.first_air_date) || formatYear(item.release_date)}, `}
              >
                <MediaCard
                  isTrending={false}
                  release_date={item.first_air_date || item.release_date}
                  poster_path={item.poster_path}
                  media_type={item.media_type}
                  video={item.video}
                  id={item.id}
                  avg_rating={item.vote_average}
                  title={item.title || item.name}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
