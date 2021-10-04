import MovieNavbar from "../components/navbar/movieNavbar.component";

import { useParams } from "react-router";

import { useEffect, useContext } from "react";

// context
import { MovieContext } from "../context/movie.context";

const movieLayout = (props) => {
  const { id } = useParams();
  return (
    <>
      <MovieNavbar />
      {props.children}
    </>
  );
};

export default movieLayout;
