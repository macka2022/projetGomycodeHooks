import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import Movies from './Movies';
const Home = () => {
     const ajouterNouveauFilm = (event) => {
      event.preventDefault(); 
      ajouterFilm(nouveauFilm); 
      setNouveauFilm({ 
        title: '',
        description: '',
        posterURL: '',
        rating: 0,
      });
    };
  
    
const [nouveauFilm, setNouveauFilm] = useState({
      title: '',
      description: '',
      posterURL: '',
      rating: 0,
    });
    const ajouterFilm = (nouveauFilm) => {
      setMovies([...movies, nouveauFilm]);
      setFilteredMovies([...movies, nouveauFilm]); 
  
    };
     const [movies, setMovies] = useState(Movies);
  
    const [filteredMovies, setFilteredMovies] = useState(movies);
  
    const handleFilter = (filters) => {
      const filtered = movies.filter((movie) => {
        const titleMatch = movie.title.includes(filters.title);
        const ratingMatch =
          movie.rating >= parseFloat(filters.rating) || filters.rating === '';
        return titleMatch && ratingMatch;
      });
      setFilteredMovies(filtered);
    };
  
    return (
      <div className="App">
    <form onSubmit={ajouterNouveauFilm}>
    <input
      type="text"
      placeholder="Title"
      value={nouveauFilm.title}
      onChange={(e) => setNouveauFilm({ ...nouveauFilm, title: e.target.value })}
    />
    <input
      type="text"
      placeholder="Description"
      value={nouveauFilm.description}
      onChange={(e) => setNouveauFilm({ ...nouveauFilm, description: e.target.value })}
    />
    <input
      type="text"
      placeholder="Poster URL"
      value={nouveauFilm.posterURL}
      onChange={(e) => setNouveauFilm({ ...nouveauFilm, posterURL: e.target.value })}
    />
    <input
      type="number"
      placeholder="Rating"
      value={nouveauFilm.rating}
      onChange={(e) => setNouveauFilm({ ...nouveauFilm, rating: e.target.value })}
    />
    <button type="submit">Ajouter</button>
  </form>
        <h1>Movie Collection</h1>
        <Filter onFilter={handleFilter} />
        <MovieList movies={filteredMovies} />
      </div>
   );
   
}

export default Home

