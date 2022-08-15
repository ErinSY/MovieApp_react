import { useEffect, useState } from 'react';
import Movies from '../components/Movies';

function Home() {
  const [movielist, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    // fetch 후에 받은데이터를 제이슨으로 바꿔주고
    const data = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
      )
    ).json();

    setMovieList(data.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        movielist.map((movie) => <Movies movieList={movie} key={movie.id} />)
      )}
    </div>
  );
}

export default Home;
