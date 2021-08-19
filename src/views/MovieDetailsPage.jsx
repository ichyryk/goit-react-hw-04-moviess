import { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import filmsApi from '../services/moviesAPI';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import Cast from '../components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import routes from 'routes';

function MovieDetailsPage() {
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const { state } = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    filmsApi.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const handleGoBack = () => {
    history.push({
      pathname: state?.from.pathname ?? routes.home,
      search: state?.from.search,
      state,
    });
  };

  return (
    <>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      {movie && <MovieDetails movie={movie} />}
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink
              className="add-info"
              activeClassName="add-info--active"
              to={`${url}/${movieId}/cast`}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className="add-info"
              activeClassName="add-info--active"
              to={`${url}/${movieId}/reviews`}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Route path={`${path}/${movieId}/cast`}>
        <Cast />
      </Route>
      <Route path={`${path}/${movieId}/reviews`}>
        <Reviews />
      </Route>
    </>
  );
}

export default MovieDetailsPage;
