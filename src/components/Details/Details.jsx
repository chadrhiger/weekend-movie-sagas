// Details.jsx

import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';



function Details() {
  console.log('in Details()');

  const history = useHistory();

  let movie = useSelector((store) => store.movie);
  // let genres = useSelector((store) => store.genres);

  const backButton = () => {
    history.push('/')
  }


  return (
    <>
      <h1>Some Details About Your Chosen Movie</h1>
      {movie && movie.map((movie) => {
        return (
          <div key={movie.id}>
            <img src={movie.poster} key={movie.id} />
            <p>{movie.description}</p>
            <button onClick={backButton}>Back</button>
          </div>
        )
      })}
      {/* {genre && genre.map((genre) => {
        return (
          <div key={genre.id}>
            <img src={genre.poster} key={genre.id} />
            <p>Genre(s): {genre}</p>
          </div>
        )
      })} */}

    </>
  )
}


export default Details;

