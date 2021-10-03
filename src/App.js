// import HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/movie.HOC";

// components
// import Temp from "./components/temp";

// pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/movie.page";
import plays from "./pages/plays.page";

// css for react slick sliders
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={MoviePage} />
      <DefaultHOC path="/plays" exact component={plays} />
    </>
  );
}

export default App;
