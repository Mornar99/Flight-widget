const Search = ({ handleSearch }) => {
    return(
        <div className="search">
            <input onChange={(e) => handleSearch(e.target.value)} type="text" className="search-bar" placeholder="Search destinations, time, gate..."></input>
        </div>
    )
}

export default Search;