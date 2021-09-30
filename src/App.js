import DefaultHOC from "./HOC/Default.HOC";

// components
// import Temp from "./components/temp";

// pages
import HomePage from "./pages/Home.page";

// css for react slick sliders
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
    </>
  );
}

export default App;
