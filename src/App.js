import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { API, GET_GENRES } from "./component/Credentials";
import MovieCard from "./component/MovieCard";
import WatchList from "./component/WatchList";

const genres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

function App() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
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

  function filter(id) {
    setFilterData(data.filter((movie) => movie.genre_ids.includes(id)));
  }

  return (
    <>
      <WatchList watch={{ watchlist, setWatchlist }} />
      <div className="genre">
        {genres.map(({ id, name }) => (
          <div className="genre-chip" key={id} onClick={() => filter(id)}>
            {name}
          </div>
        ))}
        {filterData.length !== 0 && (
          <button className="btn error" onClick={() => setFilterData([])}>
            clear filter
          </button>
        )}
      </div>
      <div className="movie-container">
        {filterData.length === 0
          ? data.map((movie) => (
              <MovieCard movie={movie} setWatchlist={setWatchlist} />
            ))
          : filterData.map((movie) => (
              <MovieCard movie={movie} setWatchlist={setWatchlist} />
            ))}
      </div>
    </>
  );
}

export default App;
