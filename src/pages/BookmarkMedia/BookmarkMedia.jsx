import SearchInput from '../../components/atoms/SearchInput/SearchInput.jsx';

export default function BookmarkMedia({ userInput, setUserInput }) {
    return (
        <>
            <SearchInput
                text='bookmarked shows'
                type='bookmark'
                userInput={userInput}
                setUserInput={setUserInput}
            />
            <span>This is the bookmark page</span>
        </>
    )
}