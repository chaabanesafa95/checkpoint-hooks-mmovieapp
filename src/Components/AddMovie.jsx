import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Rating from "@mui/material/Rating";

const AddMovie = ({ addingMovie }) => {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [newMovie, setNewMovie] = useState({
id: Math.random(),
title: "",
description: "",
posterURL: "",
rating: 0,
});

const onChangeHandler = (e) => {
setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
};

const confirmHandler = (e) => {
e.preventDefault();
addingMovie(newMovie);
handleClose();
};

return (
<div className="text-center">
<Button variant="primary" onClick={handleShow} className="mb-4">
Add new Movie
</Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title>Movie Details</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form>
<Form.Group className="mb-3">
<Form.Label>Movie Title</Form.Label>
<Form.Control
name="title"
type="text"
value={newMovie.title}
onChange={onChangeHandler}
/>
</Form.Group>
<Form.Group className="mb-3">
<Form.Label>Description</Form.Label>
<Form.Control
name="description"
type="text"
value={newMovie.description}
onChange={onChangeHandler}
/>
</Form.Group>
<Form.Group className="mb-3">
<Form.Label>Movie Image</Form.Label>
<Form.Control
name="posterURL"
type="text"
value={newMovie.posterURL}
onChange={onChangeHandler}
/>
</Form.Group>
<Form.Group className="mb-3">
<Form.Label>Movie Rating</Form.Label>
<Rating
name="rating"
max={10}
value={newMovie.rating}
onChange={(e, newValue) =>
setNewMovie({ ...newMovie, rating: newValue })
}
/>
</Form.Group>
</Form>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleClose}>
Close
</Button>
<Button variant="primary" onClick={confirmHandler}>
Confirm
</Button>
</Modal.Footer>
</Modal>
</div>
);
};

export default AddMovie;


