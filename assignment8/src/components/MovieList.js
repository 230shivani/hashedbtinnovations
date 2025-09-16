import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieList.css";
const movies = [
  {
    id: 1,
    title: "3 Idiots",
    image: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg"
  },
  {
    id: 2,
    title: "Dangal",
    image: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg"
  },
  {
    id: 3,
    title: "PK",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c3/PK_poster.jpg"
  },
  {id: 4,
    title: "Queen",
    image: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg"
  }]

export default function MovieList() {
  const navigate = useNavigate();

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <img src={movie.image} alt={movie.title} className="movie-poster" />
          <h3>{movie.title}</h3>
          <button onClick={() => navigate(`/movie/${movie.id}`)}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}
