
import { useState } from "react";
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";
import data from "./data";
import Rating from "@mui/material/Rating";

const App = () => {
const [movies, setMovies] = useState(data);
const [search, setSearch] = useState("");
const [ratingFilter, setRatingFilter] = useState(0); 


const addingMovie = (newMovie) => {
setMovies([...movies, newMovie]);
};

return (
<div className="min-h-screen bg-gray-900 text-white p-5">
<div className="flex flex-col items-center gap-4">

<input
type="search"
placeholder="Rechercher un film..."
className="p-2 rounded text-black w-80"
onChange={(e) => setSearch(e.target.value)}
/>

<Rating
name="rating-filter"
value={ratingFilter}
max={10}
onChange={(e, newValue) => setRatingFilter(newValue || 0)}
className="bg-white p-2 rounded"
/>


<AddMovie addingMovie={addingMovie} />
</div>


<MovieList
data={movies.filter(
(movie) =>
movie.title.toLowerCase().includes(search.toLowerCase()) &&
movie.rating >= ratingFilter
)}
/>
</div>
);
};

export default App;



