
import MovieCard from "./MovieCard";

const MovieList = ({ data }) => {
  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
  {data.map((el) => (
  <MovieCard movie={el} key={el.id} />
  ))}
  </div>
  );
  };
  
  export default MovieList;
  
  




