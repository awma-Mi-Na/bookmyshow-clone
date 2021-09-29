// import React from "react";
import NavBar from "../components/navbar/navbar.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";
const DefaultLayout = (props) => {
  return (
    <>
      <NavBar />
      <HeroCarousel />
      {props.children}
    </>
  );
};

export default DefaultLayout;
