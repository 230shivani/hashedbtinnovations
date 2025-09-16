import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Movie Details - ID: {id}</h2>
      <p>Some description about the movie...</p>
      <button onClick={() => navigate("/book")}>Book Seat</button>
    </div>
  );
}
