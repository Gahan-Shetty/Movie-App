import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFavorites, saveFavorites } from "../utils/localStorage";

const API_KEY = "b93dec64";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  const addToFavorites = () => {
    const favs = getFavorites();
    saveFavorites([...favs, movie]);
    alert("Added to favorites");
  };

  return (
    <div className="details">
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
      <p>
        <b>Genre:</b> {movie.Genre}
      </p>
      <p>
        <b>Actors:</b> {movie.Actors}
      </p>
      <p>
        <b>Runtime:</b> {movie.Runtime}
      </p>
      <button onClick={addToFavorites}>Add to Favorites</button>
    </div>
  );
}

export default MovieDetails;
