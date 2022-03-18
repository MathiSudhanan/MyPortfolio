import mathi from "../images/me-removebg-preview.png";
import Navbar from "./Navbar";

const About = () => {
  return (
    <section className='section-2'>
      <div className='section-2-wrapper'>
        <h1 className='section-2-heading'>About Me</h1>
      </div>

      <div className='container'>
        <div className='card'>
          <div className='box'>
            <div className='content'>
              <p>
                Innovative, task-driven professional with 15+ years of
                experience in web design and development across various
                industries. Equipped with success in consistently identifying
                and providing technological needs of companies through ingenious
                innovation.
              </p>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='box'>
            <div className='content'>
              {/* <h2>About Me</h2> */}
              <p>MathiSudhanan</p>
              <img src={mathi} className='about-profile-img' />
              <p>MathiSudhanan</p>

            </div>
          </div>
        </div>

        <div className='card'>
          <div className='box'>
            <div className='content'>
              {/* <h2>03</h2>
        <h3>Card Three</h3> */}
              <p>
                Proficient in developing databases, creating rest API, user
                interfaces, writing and testing codes, troubleshooting
                simple/complex issues and implementing new features based on the
                requirement and user feedback.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
        </div>
      </div>
      <div className='icons-wrapper'>
        <div className='tag'>
          {/* <i className="fa-brands fa-html5"></i> */}
          <span className='text'>HTML</span>
          <span className='count'>16</span>
        </div>
        <div className='tag'>
          {/* <i className="fa-brands fa-css3"></i> */}
          <span className='text'>CSS3</span>
          <span className='count'>16</span>
        </div>
        <div className='tag'>
          {/* <i className="fa-brands fa-js"></i> */}
          <span className='text'>Javascript</span>
          <span className='count'>16</span>
        </div>
        <div className='tag'>
          {/* <i className="fa-brands fa-js"></i> */}
          <span className='text'>TypeScript</span>
          <span className='count'>3</span>
        </div>

        <div className='tag'>
          {/* <i className="fa-brands fa-react"></i> */}
          <span className='text'>React</span>
          <span className='count'>3</span>
        </div>
        <div className='tag'>
          {/* <i className="fa-brands fa-js"></i> */}
          <span className='text'>Redux</span>
          <span className='count'>3</span>
        </div>
        {/* </div>
            <div className="icons-wrapper"> */}
        <div className='tag'>
          {/* <i className="fa-brands fa-github"></i> */}
          <>
            <span className='text'>.NET MVC</span>
            <span className='count'>8</span>
          </>
        </div>
        <div className='tag'>
          {/* <i className="fa-brands fa-github"></i> */}
          <span className='text'>.NET Core</span>
          <span className='count'>5</span>
        </div>
        <div className='tag'>
          {/* <i className="fa-brands fa-github"></i> */}
          <span className='text'>WEB API</span>
          <span className='count'>8</span>
        </div>
        <div className='tag'>
          {/* <i className="fa-brands fa-github"></i> */}
          <span className='text'>SQL Server</span>
          <span className='count'>16</span>
        </div>
        <div className='tag'>
          {/* <i className="fa-brands fa-github"></i> */}
          <span className='text'>PostGreSQL</span>
          <span className='count'>1</span>
        </div>
        <div className='tag'>
          {/* <i className="fa-brands fa-github"></i> */}
          <span className='text'>Github</span>
          <span className='count'>3</span>
        </div>
      </div>
    </section>
  );
};

export default About;
