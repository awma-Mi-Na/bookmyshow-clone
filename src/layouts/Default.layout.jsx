// import React from "react";
import NavBar from "../components/navbar/navbar.component";

const DefaultLayout = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
};

export default DefaultLayout;
