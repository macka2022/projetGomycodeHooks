import React from 'react';
import MovieCard from './MovieCard';
import CardGroup from 'react-bootstrap/CardGroup';

function MovieList({ movies }) {
  return (
    <CardGroup>
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
      </CardGroup>
  );
}

export default MovieList;

