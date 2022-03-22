import React from "react";
// import "../App.css";
import mathi from "../images/me-removebg-preview.png";
import Navbar from "./Navbar";
import scroll from '../images/Daco_115886.png'
import { Link } from 'react-scroll'


const Home = () => {
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
      <Link
                offset={-50}
                smooth={true}
                to='about'
                className='nav-menu'
                href='#'
                spy={true}
                activeClass='active'
              >
                 <i className="fa-solid fa-angles-down scroll-img bounce"></i>
              </Link>
        {/* <a href="#">
        
        <i className="fa-solid fa-angles-down scroll-img bounce"></i>
       
        </a> */}
      </div>
    </section>
  );
};

export default Home;
