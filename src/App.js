import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API =
  "https://api.themoviedb.org/4/discover/movie?api_key=14d6be44c2b7de5a4a5acb8da7c1fae6";

const IMG_PREFIX = "http://image.tmdb.org/t/p/w500";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(API);
        if (response) {
          setData(response.data.results);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return (
    <div className="movie-container">
      {data &&
        data.map((movie) => (
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
                <i className="fas fa-heart wishlist"></i>
              </div>
              <div className="card-subtitle">
                <p>Pouplarity: {movie.popularity}</p>
                Lang: {movie.original_language}
              </div>
              <div className="card-content">{movie.overview}</div>
              <p className="rating">{movie.vote_average}</p>
              <div className="btn-group">
                <button className="btn primary">Add to watchlist</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default App;
