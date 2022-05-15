// MovieItem.jsx

import { useDispatch, useSelector } from 'react-redux';





function MovieItem({movie}) {

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ 
      type: 'FETCH_MOVIE',
      payload: movie.id
  });
  }

  return (
    <div key={movie.id} >
      <h3>{movie.title}</h3>
      <img onClick={handleClick} src={movie.poster} alt={movie.title} />
    </div>
  )
}

export default MovieItem;