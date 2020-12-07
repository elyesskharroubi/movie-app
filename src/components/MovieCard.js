import React from "react";
import Card from "react-bootstrap/Card";
import StarRatingComponent from 'react-star-rating-component';

function MovieCard({movie}) {
  return (
    <>
      <Card style={{ width: "18rem", backgroundColor: "#262626", margin: "10px"}}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
            <Card.Title style={{color: "#fff"}}>{movie.title}</Card.Title>
            <Card.Text style={{color: "#fff"}}>
                {movie.description}
            </Card.Text>
            <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
          emptyStarColor={'#5a6477'}
        />
        </Card.Body>
      </Card>
    </>
  );
}

export default MovieCard;
