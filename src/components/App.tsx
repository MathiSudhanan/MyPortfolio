// import "../App.css";
// import About from './About';
import About2 from "./About2";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import '../Portfolio.css'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home />
      {/* <About/> */}
      <About2></About2>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <Contact></Contact> 
    </>
  );
}

export default App;
