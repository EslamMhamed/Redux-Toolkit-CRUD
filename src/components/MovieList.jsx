import { useSelector } from "react-redux";

function MovieList() {

  const movies = useSelector((state)=> state.movies.movies)

  return <div>
    <h1>MovieList</h1>
    {movies.map((movie)=> (
      <div key={movie.id}>
        {movie.name}
      </div>
    ))}
  </div>;
}

export default MovieList;
