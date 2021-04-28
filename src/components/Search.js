function Search({ showSearchModal }) {

    const toRender = showSearchModal ? <div className="search-modal">Search</div> : null

    return (
        toRender
    );
}

export default Search;