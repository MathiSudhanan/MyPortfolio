// import React from "react";
// // import "../App.css";
// import mathi from "../images/me-removebg-preview.png";
// import Navbar from "./Navbar";
// import scroll from '../images/Daco_115886.png'
import { Link as LinkScroll } from 'react-scroll'
import { saveAs } from "file-saver";


const Home = () => {
  const saveFile = () => {
    saveAs(
      "../files/MathiSudhanan.pdf",
      "mathiSudhanan-resume.pdf"
    );
  };

  return (
    <section id='home' className='section-1'>
      

      <div className='section-1-content'>
        <h1 className='section-1-heading '>
          <span className='bounce'>Hi,&nbsp;</span>
          <span>I'm MathiSudhanan. </span>
          <span>
            {/* <br /> */}
            Full Stack Developer.
          </span>
        </h1>

      </div>
      <div className='scroll-img-wrapper center'>
      <LinkScroll
                offset={-50}
                smooth={true}
                to='about'
                className='nav-menu'
                href='#'
                spy={true}
                activeClass='active'
                
              >
                 <i className="fa-solid fa-angles-down scroll-img bounce"></i>
              </LinkScroll>
        
        
              
      </div>
      <div className="resume-download-wrapper">
      <a href="#" className="nav-menu " onClick={saveFile}><i className="fa-solid fa-file-arrow-down resume-download"></i><br/>Resume</a>
      </div>
    </section>
  );
};

export default Home;
