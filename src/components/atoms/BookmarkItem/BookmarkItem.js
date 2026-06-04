const useBookmark = ({ setIsBookmark, id }) => {

    function clickHandler(id) {
        //toggle the useState of the id
        setIsBookmark(value => !value);

        //and parallely adds/removes the id to/from localStorage
        if (localStorage.getItem(id)) {
            localStorage.removeItem(id);
        } else {
            localStorage.setItem(id, id);
        }
    }

    return {
        clickHandler
    }
}

export default useBookmark;