import MovieNavbar from "../components/navbar/movieNavbar.component";

import { useParams } from "react-router-dom";

import { useEffect, useContext } from "react";

import axios from "axios";

// context
import { MovieContext } from "../context/movie.context";

const MovieLayout = (props) => {
  const { id } = useParams();

  const { setMovie } = useContext(MovieContext);

  useEffect(() => {
    const reqMovie = async () => {
      const getMovieData = await axios.get(`/movie/${id}`);
      setMovie(getMovieData.data);
    };
    reqMovie();
  }, [id]);
  return (
    <>
      <MovieNavbar />
      {props.children}
    </>
  );
};

export default MovieLayout;
