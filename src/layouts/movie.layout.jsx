import NavBar from "../components/navbar/navbar.component";

const movieLayout = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
};

export default movieLayout;
