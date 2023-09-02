
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

function App() {


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
  const [movies, setMovies] = useState([
    {
      title: 'Movie 1',
      description: 'Description for Movie 1',
      posterURL: 'https://i.pinimg.com/564x/88/3c/65/883c650260d729c6cc2304fce8bbbe88.jpg',

      rating: 4.5,
    },
    {
      title: 'Movie 2',
      description: 'Description for Movie 2',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Jack_Bauer.jpg/330px-Jack_Bauer.jpg',
      rating: 3.8,
    },
    // Add more movies here...
  ]);

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

export default App;


//////////////////////////////////////////
