import defaultImg from '../../images/unnamed.jpg';
import s from './MovieDetails.module.css';

const MovieDetails = ({ movie }) => {
  const { title, overview, poster_path, genres, release_date, vote_average } =
    movie;

  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : defaultImg;

  return (
    <div className={s.flex}>
      <div className={s.info}>
        <img src={imgUrl} alt={title} />
        <h2>{title}</h2>
        <b>Release: ({release_date})</b>
        <p>User score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
