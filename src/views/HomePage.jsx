import { useState, useEffect } from 'react';
// import { useRouteMatch, useLocation } from 'react-router-dom';
import filmsApi from '../services/moviesAPI';
import MovieList from 'components/MoviesList/MoviesList';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    filmsApi.fetchTrendingMovies().then(setMovies).catch(setError);
  }, []);

  return (
    <div>
      <h2 className="Homepage-title">The most popular movies today</h2>
      {error && <p>Oops, something went wrong... {error}</p>}

      {movies && <MovieList movies={movies} />}
    </div>
  );
}

export default HomePage;
