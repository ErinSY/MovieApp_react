// import './EachMovies.scss';

function EachMovies({ movies }) {
  return (
    <div className='eachMovie'>
      <h1 className='movieTitle'>{movies.title}</h1>
      <img
        className='movieImg'
        src={movies.large_cover_image}
        alt='movie img'
      />
      <p className='movieDesc'>{movies.description_intro}</p>
    </div>
  );
}

export default EachMovies;
