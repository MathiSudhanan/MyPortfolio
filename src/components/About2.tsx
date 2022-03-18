import mathi from "../images/me-removebg-preview.png";
import html from "../images/HTML.png";
import css from "../images/CSS.png";
import bootstrap from "../images/BootStrap.png";
import material from "../images/MaterialUI.png";

import javascript from "../images/Javascript.png";
import typescript from "../images/typescript.png";
import react from "../images/React.png";
import redux from "../images/Redux.png";

import mvc from "../images/MVC.png";
import api from "../images/RestApi.png";
import RabbitMQ from "../images/RabbitMq.png";

import sql from "../images/SQL Server.png";
import postgres from "../images/PostGres.png";
import redis from "../images/Redis.png";
import { techStack } from "../models/techStack";

interface Props {}

const About2 = (props: Props) => {
  const techStackItems: techStack[] = [
    {
      imageSrcName: html,
      text: "HTML",
      years: "15+",
    },
    {
      imageSrcName: css,
      text: "CSS",
      years: "15+",
    },
    
    {
      imageSrcName: javascript,
      text: "Javascript",
      years: "13+",
    },
    {
      imageSrcName: typescript,
      text: "TypeScript",
      years: "3+",
    },
    {
      imageSrcName: react,
      text: "React",
      years: "3+",
    },
    {
      imageSrcName: redux,
      text: "Redux",
      years: "2+",
    },
    {
      imageSrcName: bootstrap,
      text: "Bootstrap",
      years: "7+",
    },
    {
      imageSrcName: material,
      text: "Material UI",
      years: "1+",
    },
    {
      imageSrcName: mvc,
      text: ".NET MVC",
      years: "8+",
    },
    {
      imageSrcName: api,
      text: "Rest API",
      years: "7+",
    },
    {
      imageSrcName: RabbitMQ,
      text: "RabbitMQ",
      years: "5+",
    },
    {
      imageSrcName: sql,
      text: "SQL Server",
      years: "15+",
    },
    {
      imageSrcName: postgres,
      text: "PostGreSQL",
      years: "2+",
    },
    {
      imageSrcName: redis,
      text: "Redis",
      years: "5+",
    },
  ];

  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className='about-me'>
        <div className='about-me-header'>
          <div className='about-me-heading'>
            MathiSudhanan
            <br />
            Full Stack Developer
            <br />
            Based in India
          </div>
        </div>
        <div className='about-me-section-wrapper'>
          <div className='about-me-section-1'>
            <p>
              Innovative, task-driven professional with 15+ years of experience
              in web design and development across various industries. Equipped
              with success in consistently identifying and providing
              technological needs of companies through ingenious innovation.{" "}
              <br></br> Now starting up as a freelancer.
            </p>
            <p></p>
          </div>
          <div className='about-me-section-2'>
            <div className='about-me-img-wrapper center'>
              <img src={mathi} className='about-me-img' />
            </div>
          </div>
          <div className='about-me-section-3'>
            <p>
              Proficient in developing databases, creating rest API, user
              interfaces with Responsive UI, writing and testing codes, troubleshooting
              simple/complex issues and implementing new features based on the
              requirement and user feedback.
            </p>
          </div>
        </div>
        <div className='about-me-tags'>
          {techStackItems.map((item:techStack)=>{
            // console.log(item);
            return(
            <div className='about-me-tag'>
            <div className='about-me-tag-icon'>
              <img src={item.imageSrcName} className='about-me-icon' />
            </div>
            <div className='about-me-tag-icon-text'>{item.text}</div>

            <div className='about-me-tag-icon-years'>{item.years}</div>
          </div>
            )
          })}
          {/* <div className='about-me-tag'>
            <div className='about-me-tag-icon'>
              <img src={html} className='about-me-icon' />
            </div>
            <div className='about-me-tag-icon-text'>HTML</div>

            <div className='about-me-tag-icon-years'>15+</div>
          </div>
          <div className='about-me-tag'>
            <div className='about-me-tag-icon'>
              <img src={css} className='about-me-icon' />
            </div>
            <div className='about-me-tag-icon-text'>CSS</div>

            <div className='about-me-tag-icon-years'>15+</div>
          </div>
          <div className='about-me-tag'>
            <div className='about-me-tag-icon'>
              <img src={bootstrap} className='about-me-icon' />
            </div>
            <div className='about-me-tag-icon-text'>Bootstrap</div>

            <div className='about-me-tag-icon-years'>7+</div>
          </div>
          <div className='about-me-tag'>
            <div className='about-me-tag-icon'>
              <img src={material} className='about-me-icon' />
            </div>
            <div className='about-me-tag-icon-text'>Material UI</div>

            <div className='about-me-tag-icon-years'>1+</div>
          </div>
          <div className='about-me-tag'>
            <div className='about-me-tag-icon'>
              <img src={javascript} className='about-me-icon' />
            </div>
            <div className='about-me-tag-icon-text'>Javascript</div>

            <div className='about-me-tag-icon-years'>13+</div>
          </div>
          <div className='about-me-tag'>
            <div className='about-me-tag-icon'>
              <img src={typescript} className='about-me-icon' />
            </div>
            <div className='about-me-tag-icon-text'>TypeScript</div>

            <div className='about-me-tag-icon-years'>3+</div>
          </div>
          <div className='about-me-tag'>
            <div className='about-me-tag-icon'>
              <img src={react} className='about-me-icon' />
            </div>
            <div className='about-me-tag-icon-text'>React</div>

            <div className='about-me-tag-icon-years'>3+</div>
          </div>
          <div className='about-me-tag'>
            <div className='about-me-tag-icon'>
              <img src={redux} className='about-me-icon' />
            </div>
            <div className='about-me-tag-icon-text'>Redux</div>

            <div className='about-me-tag-icon-years'>2+</div>
          </div>
          <div className='about-me-tag'>
            <div className='about-me-tag-icon'>
              <img src={mvc} className='about-me-icon' />
            </div>
            <div className='about-me-tag-icon-text'>.NET MVC</div>

            <div className='about-me-tag-icon-years'>8+</div>
          </div>
          <div className='about-me-tag'>
            <div className='about-me-tag-icon'>
              <img src={api} className='about-me-icon' />
            </div>
            <div className='about-me-tag-icon-text'>Rest API</div>

            <div className='about-me-tag-icon-years'>7+</div>
          </div>
          <div className='about-me-tag'>
            <div className='about-me-tag-icon'>
              <img src={RabbitMQ} className='about-me-icon' />
            </div>
            <div className='about-me-tag-icon-text'>RabbitMQ</div>

            <div className='about-me-tag-icon-years'>5+</div>
          </div>
          <div className='about-me-tag'>
            <div className='about-me-tag-icon'>
              <img src={sql} className='about-me-icon' />
            </div>
            <div className='about-me-tag-icon-text'>SQL Server</div>

            <div className='about-me-tag-icon-years'>15+</div>
          </div>
          <div className='about-me-tag'>
            <div className='about-me-tag-icon'>
              <img src={postgres} className='about-me-icon' />
            </div>
            <div className='about-me-tag-icon-text'>PostGreSQL</div>

            <div className='about-me-tag-icon-years'>2+</div>
          </div>
          <div className='about-me-tag'>
            <div className='about-me-tag-icon'>
              <img src={redis} className='about-me-icon' />
            </div>
            <div className='about-me-tag-icon-text'>Redis</div>

            <div className='about-me-tag-icon-years'>5+</div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default About2;
