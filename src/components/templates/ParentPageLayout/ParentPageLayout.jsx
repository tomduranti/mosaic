//react
import { Outlet } from 'react-router';
import SearchInput from '@atoms/SearchInput/SearchInput.jsx';

export default function ParentPageLayout({ pageTitle, text, handler, isSearchActive = true }) {
    return (
        <>
            <h1 className='hidden' aria-label={pageTitle}>{pageTitle}</h1>
            { isSearchActive ? <SearchInput text={text} onSearch={handler} /> : null }
            <Outlet />
        </>
    )
}