import MovieNavbar from "../components/navbar/movieNavbar.component";

const movieLayout = (props) => {
  return (
    <>
      <MovieNavbar />
      {props.children}
    </>
  );
};

export default movieLayout;
