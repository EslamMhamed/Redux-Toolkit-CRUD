import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../store/movieSlice";

function MovieList() {

  const movies = useSelector((state)=> state.movies.movies)

  const dispatch = useDispatch()

  function handleDeleteMovie(id){
    dispatch(removeMovie(id))
  }

  return <div>
    <h1>MovieList</h1>
    {movies.map((movie)=> (
      <div key={movie.id}>
        {movie.name}
        <button onClick={()=>handleDeleteMovie(movie.id)}>Delete Movie</button>
      </div>
    ))}
  </div>;
}

export default MovieList;
