import React from "react";
import "../App.css";
import mathi from "../images/me-removebg-preview.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className='section-1 center'>
      

      <div className='section-1-content center'>
        <h1 className='section-1-heading'>
          <span className='bounce'>Hi,&nbsp;</span>
          <span>I'm MathiSudhanan. </span>
          <span>
            {/* <br /> */}
            Full Stack Developer.
          </span>
        </h1>
      </div>
      {/* <div className='profile-img-wrapper center'>
        <img src={mathi} className='profile-img' />
      </div> */}
    </div>
  );
};

export default Home;
