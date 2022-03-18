import "../App.css";
// import About from './About';
import About2 from "./About2";
import Experience from "./Experience";
import Home from "./Home";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home />
      {/* <About/> */}
      <About2></About2>
      <Experience></Experience>
      <Portfolio ></Portfolio>
    </>
  );
}

export default App;
