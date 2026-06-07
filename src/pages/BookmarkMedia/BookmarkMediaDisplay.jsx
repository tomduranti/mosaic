//react libraries and components
import { useState, useEffect } from 'react';
import { useOutletContext } from "react-router";
import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';
import Loading from '../../components/atoms/Loading/Loading.jsx';

export default function BookmarkMediaDisplay() {
    const { bookmarkedMedia } = useOutletContext();

    const isMovie = item => item.media_type === 'movie' || item.video !== undefined;

    const movies = bookmarkedMedia.filter(isMovie);
    const tvShows = bookmarkedMedia.filter(item => !isMovie(item));

    return (
        <>

            {movies.length > 0 && (
                <ContentGrid pageName={'Bookmarked movies'} isTrending={false} array={movies} />
            )}

            {tvShows.length > 0 && (
                <ContentGrid pageName={'Bookmarked TV shows'} isTrending={false} array={tvShows} />
            )}
        </>
    )
}