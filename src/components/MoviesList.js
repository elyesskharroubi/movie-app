import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";


//importing components
import MovieCard from "./MovieCard";

function MoviesList(props) {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);

  const filteredMovies = props.movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(search.toLowerCase().trim()) && movie.rate >= rating
    );
  });

  const clear = () => setRating(0);

  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          className="searchInput"
          placeholder="Search Movies"
          onChange={(e) => setSearch(e.target.value)}
        />
        <StarRatingComponent
          name="search"
          starCount={5}
          value={rating}
          onStarClick={(e) => setRating(e)}
          emptyStarColor={"#5a6477"}
        />
        <button className="clear" onClick={clear}>
          Clear
        </button>
      </div>
      <div className="movieList">
        {filteredMovies.map((el) => (
          <MovieCard movie={el} />
        ))}
      </div>
    </>
  );
}

export default MoviesList;
