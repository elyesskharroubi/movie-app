import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// *Importing Components
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
// import Search from './components/Search';


function App() {

  const [movies, setMovies] = useState(
   [ {
      title: 'Avengers: Endgame',
      description: "Action movie",
      posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
      rate: 4
    },
    {
      title: 'Interstellar',
      description: "Sci-fi, Adventure movie",
      posterUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      rate: 5
    },
    {
      title: 'Inception',
      description: "Action, Sci-fi movie",
      posterUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      rate: 4
    }]
  )

  const addMovie = (title, description, posterUrl, rate) => {
    setMovies([...movies, { title, description, posterUrl, rate }]);
  };



  return (
    <div className="App">
      {/* <Search movies={movies}  /> */}
      <AddMovie addMovie={addMovie} /> 
      <MoviesList movies={movies}  />
      
       
    </div>
  );
}

export default App;
