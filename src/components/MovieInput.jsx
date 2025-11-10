import  { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMovie } from '../store/movieSlice'

function MovieInput() {

    const [newMovie, setNewMovie] = useState("")
    const dispatch = useDispatch()

    function handleAddMovie(){
        if(newMovie){
            dispatch(addMovie(newMovie))
        }
    }

  return (
    <>
        <input type="text" value={newMovie} onChange={(e)=> setNewMovie(e.target.value)} />
        <button onClick={handleAddMovie}>Add Movie</button>
    </>
  )
}

export default MovieInput