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

// axios
import axios from "axios";

// axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {}; // first create an empty object for params and later add the params with key and value
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY; // here we create a param key: api_key with the value defined in env file

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
