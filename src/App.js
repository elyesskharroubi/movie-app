import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Route } from "react-router-dom";

// Importing Components
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import MovieDesc from "./components/MovieDesc";

function App() {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      title: "Avengers: Endgame",
      genre: "Action movie",
      description:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
      trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
      rate: 3,
    },
    {
      id: uuidv4(),
      title: "Interstellar",
      genre: "Sci-fi, Adventure movie",
      description:
        "In the future, where Earth is becoming uninhabitable, farmer and ex-NASA pilot Cooper is asked to pilot a spacecraft along with a team of researchers to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      rate: 5,
    },
    {
      id: uuidv4(),
      title: "Inception",
      genre: "Action, Sci-fi movie",
      description:
        "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      rate: 4,
    },
  ]);

  const addMovie = (
    id,
    description,
    trailer,
    title,
    genre,
    posterUrl,
    rate
  ) => {
    setMovies([
      ...movies,
      { id, description, trailer, title, genre, posterUrl, rate },
    ]);
  };



  return (
    <div className="App">
      <BrowserRouter>
        <AddMovie addMovie={addMovie} />
        <MoviesList movies={movies} />
        <Route path='/movie/:id' render={props => <MovieDesc {...props} movies={movies}/>}/>
      </BrowserRouter>
    </div>
  );
} 

export default App;
