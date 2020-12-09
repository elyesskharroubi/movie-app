import React from "react";
import { Card, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <>
      <Card
        style={{ width: "18rem", backgroundColor: "#262626", margin: "10px" }}
        className="movieCardContainer"
      >
        <figure style={{ height: "424px", overflow: "hidden" }}>
          <Card.Img variant="top" src={movie.posterUrl} className="movImg" />
        </figure>
        <Card.Body>
          <Card.Title style={{ color: "#fff" }}>{movie.title}</Card.Title>
          <Card.Text style={{ color: "#fff" }}>{movie.genre}</Card.Text>
          <div className="innerCard">
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={movie.rate}
              emptyStarColor={"#5a6477"}
            />
            <hr />
            <Link to={`/movie/${movie.id}`}>
              <Button variant="outline-warning">More</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default MovieCard;
