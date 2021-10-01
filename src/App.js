// import HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/movie.HOC";

// components
// import Temp from "./components/temp";

// pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/movie.page";

// css for react slick sliders
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={MoviePage} />
    </>
  );
}

export default App;
