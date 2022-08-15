import React from 'react';
import { Link } from 'react-router-dom';

function Movies({ movieList }) {
  return (
    <div>
      <h1>
        <Link to={`/movies/${movieList.id}`}>{movieList.title}</Link>
      </h1>
      <img src={movieList.medium_cover_image} alt='movieImg' />
      <p>{movieList.summary}</p>
    </div>
  );
}

export default Movies;
