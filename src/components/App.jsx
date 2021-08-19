import { Switch, Route } from 'react-router-dom';
import routes from '../routes';
import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import HomePage from '../views/HomePage';
import MoviePage from '../views/MoviePage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import NotFoundView from '../views/NotFoundView';

function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path={routes.home} exact>
          <HomePage />
        </Route>

        <Route path={routes.movies} exact>
          <MoviePage />
        </Route>

        <Route path={routes.movieDetail}>
          <MovieDetailsPage />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
