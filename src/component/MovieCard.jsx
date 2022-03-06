import React from "react";
import { IMG_PREFIX } from "./Credentials";

export default function MovieCard({ movie, setWatchlist }) {
  function addtoWatchList(movie) {
    setWatchlist((prev) => prev.concat(movie));
  }
  return (
    <div className="card vertical" key={movie.id}>
      <div className="card-image-container">
        <img
          className="card-image"
          src={`${IMG_PREFIX}${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="main-content">
        <div className="card-title">
          {movie.title}
          <i
            className="fas fa-heart wishlist"
            onClick={() => addtoWatchList(movie)}
          ></i>
        </div>
        <div className="card-subtitle">
          <p>Pouplarity: {movie.popularity}</p>
          Lang: {movie.original_language}
        </div>
        <div className="card-content">{movie.overview}</div>
        <p className="rating text-bold">{movie.vote_average}</p>
      </div>
    </div>
  );
}
