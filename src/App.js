import DefaultHOC from "./HOC/Default.HOC";
import Temp from "./components/temp";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={Temp} />
    </>
  );
}

export default App;
