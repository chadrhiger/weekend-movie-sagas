// MovieItem.jsx

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';





function MovieItem({movie}) {

  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ 
      type: 'FETCH_MOVIE',
      payload: movie.id
  });
  history.push('/details');
  }

  return (
    <div key={movie.id} >
      <h3>{movie.title}</h3>
      <img onClick={handleClick} src={movie.poster} alt={movie.title} />
    </div>
  )
}

export default MovieItem;