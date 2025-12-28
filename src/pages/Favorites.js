import { getFavorites, saveFavorites } from "../utils/localStorage";

function Favorites() {
  const favorites = getFavorites();

  const removeMovie = (id) => {
    const updated = favorites.filter((m) => m.imdbID !== id);
    saveFavorites(updated);
    window.location.reload();
  };

  return (
    <div className="grid">
      {favorites.length === 0 && <p>No favorites added</p>}

      {favorites.map((movie) => (
        <div key={movie.imdbID} className="card">
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>
          <button onClick={() => removeMovie(movie.imdbID)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
