// MovieList.jsx (home page)

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {

    const dispatch = useDispatch();
    // This is what is in the movie reducer
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ 
            type: 'FETCH_MOVIES' 
        });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">            
                {movies.map(movie => {
                    return (
                        <MovieItem key={movie.id} movie={movie}/>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;