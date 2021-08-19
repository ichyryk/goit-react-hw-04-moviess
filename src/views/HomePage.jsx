import { useState, useEffect } from 'react';
// import { useRouteMatch, useLocation } from 'react-router-dom';
import filmsApi from '../services/moviesAPI';
import MovieList from 'components/MoviesList/MoviesList';

function HomePage() {
  // const { url } = useRouteMatch();
  // const location = useLocation();
  const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    filmsApi.fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h2>Trending Today</h2>

      {movies && <MovieList movies={movies} />}
    </div>
  );
}

export default HomePage;
