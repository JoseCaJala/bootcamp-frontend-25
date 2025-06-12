const SearchInput = ({ inputRef, placeholder, onKeyPress }) => {
  return (
    <input
      ref={inputRef}
      type="text"
      placeholder={placeholder}
      onKeyPress={onKeyPress}
      className="search-input"
    />
  );
};

export default SearchInput;