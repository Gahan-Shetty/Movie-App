function SearchBar({ setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchBar;
