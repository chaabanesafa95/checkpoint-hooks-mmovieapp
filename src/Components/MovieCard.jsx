import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";

const MovieCard = ({ movie }) => {
return (
<div className="bg-gray-800 p-4 rounded-lg shadow-lg">
<img src={movie.posterURL} alt={movie.title} className="w-full h-64 object-cover rounded-md" />
<div className="p-2">
<h2 className="text-lg font-bold">{movie.title}</h2>
<p className="text-sm text-gray-400">{movie.description}</p>
<Rating name="read-only" value={movie.rating} readOnly max={10} />
</div>
</div>
);
};

export default MovieCard;

