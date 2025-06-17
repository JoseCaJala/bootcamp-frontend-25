import Button from "../atoms/button"
import SearchInput from "../atoms/searchInput"

const SearchBar = ({ inputRef, onSearch, onClean, onKeyPress}) => {
    return (
        <div className="search-bar">
            <SearchInput
                inputRef={inputRef}
                placeholder="Search for a city..."
                onKeyPress={onKeyPress}
            />
            <Button onClick={onSearch}>
                Search
            </Button>
            <Button onClick={onClean} variant="clean">
                Clean
            </Button>
        </div>
    );    
};

export default SearchBar;
