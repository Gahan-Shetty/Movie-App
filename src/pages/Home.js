import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const API_KEY = "b93dec64";

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("batman");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.Search || []));
  }, [query, page]);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />

      <div className="grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Home;
