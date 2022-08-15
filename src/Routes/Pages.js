import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EachMovies from './EachMovies';

function Pages() {
  const { hihi } = useParams();
  const [movie, setMovie] = useState('');

  const gotoLink = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${hihi}`)
    ).json();

    setMovie(json.data.movie);
  };

  useEffect(() => {
    gotoLink();
  }, []);
  console.log(movie);

  return (
    <div>
      <EachMovies movies={movie} />
    </div>
  );
}

export default Pages;
