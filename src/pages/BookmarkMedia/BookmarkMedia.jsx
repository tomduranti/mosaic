import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';

export default function Bookmark() {
    return (
        <>
            <SearchInput text='bookmarked shows' arraysToSearch={[]}/>
            <span>This is the bookmark page</span>
        </>
    )
}