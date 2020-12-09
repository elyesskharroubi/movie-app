import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [posterUrl, setposterUrl] = useState("");
  const [rate, setRate] = useState();
  const [id, setId] = useState(uuidv4);
  const [description, setDescription] = useState("");
  const [trailer, setTrailer] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(id, description, trailer, title, genre, posterUrl, rate);
    setTitle("");
    setGenre("");
    setposterUrl("");
    setRate("");
    setDescription("");
    setTrailer("");
    setShow(false);
    setId();
  };

  return (
    <>
      <Button
        variant="warning"
        onClick={handleShow}
        style={{ fontWeight: 600, margin: "20px" }}
      >
        + ADD
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <input
            type="text"
            id="title"
            placeholder="Movie Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            id="genre"
            placeholder="Movie genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <input
            type="text"
            id="posterUrl"
            placeholder="Movie Poster Link"
            value={posterUrl}
            onChange={(e) => setposterUrl(e.target.value)}
          />
          <input
            type="text"
            id="description"
            placeholder="Movie Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            id="trailer"
            placeholder="Trailer Embed Link"
            value={trailer}
            onChange={(e) => setTrailer(e.target.value)}
          />
          <input
            type="text"
            id="rate"
            placeholder="Movie Rating"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleSubmit}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;
