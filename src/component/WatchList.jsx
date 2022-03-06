import React from "react";
import { IMG_PREFIX } from "./Credentials";

export default function WatchList({ watch }) {
  const { watchlist, setWatchlist } = watch;
  function remove(id) {
    setWatchlist((curr) => curr.filter((item) => item.id !== id));
  }
  return (
    <div className="watchlist-container">
      {watchlist &&
        watchlist.map((movie) => (
          <div className="card vertical" key={movie.id}>
            <div className="card-image-container">
              <img
                className="card-image"
                src={`${IMG_PREFIX}${movie.poster_path}`}
                alt=""
              />
            </div>
            <div className="main-content">
              <div className="card-title">{movie.title}</div>
              <div className="card-subtitle">
                <p>Pouplarity: {movie.popularity}</p>
                Lang: {movie.original_language}
              </div>
              <div className="card-content">{movie.overview}</div>
              <p className="rating">{movie.vote_average}</p>
              <div className="btn-group">
                <button
                  className="btn outline-error"
                  onClick={() => remove(movie.id)}
                >
                  remove
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
