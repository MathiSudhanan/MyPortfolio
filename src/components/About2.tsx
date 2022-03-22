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
    
      <section id='about' className='section-2'>
        <div className='section-2-header-wrapper center'>
          <div className='section-2-heading'>
            MathiSudhanan
            <br />
            Full Stack Developer
            <br />
            Based in India
          </div>
        </div>
        <div className='section-2-content-wrapper'>
          <div className='section-2-content-1'>
            <p>
              Innovative, task-driven professional with 15+ years of experience
              in web design and development across various industries. Equipped
              with success in consistently identifying and providing
              technological needs of companies through ingenious innovation.{" "}
              <br></br> Now starting up as a freelancer.
            </p>
            <p></p>
          </div>
          <div className='section-2-content-2 center'>
            <div className='section-2-img-wrapper'>
              <img src={mathi} className='about-me-img' />
            </div>
          </div>
          <div className='section-2-content-3'>
            <p>
              Proficient in developing databases, creating rest API, user
              interfaces with Responsive UI, writing and testing codes, troubleshooting
              simple/complex issues and implementing new features based on the
              requirement and user feedback.
            </p>
          </div>
        </div>
         <div className='section-2-tags center'>
          {techStackItems.map((item:techStack)=>{
            
            return(
            <div className='section-2-tag center'>
            <div className='section-2-tag-icon'>
              <img src={item.imageSrcName} className='section-2-icon' />
            </div>
            <div className='section-2-tag-icon-text'>{item.text}</div>

            <div className='section-2-tag-icon-years'>{item.years}</div>
          </div>
            )
          })}
         
        </div> 
      </section>
    
  );
};

export default About2;
