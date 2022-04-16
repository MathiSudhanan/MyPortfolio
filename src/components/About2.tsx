import mathi from "../images/me-removebg-preview.png";

import { techStack } from "../models/techStack";
import { techStackItems } from "../portfolioData";

interface Props {}

const About2 = (props: Props) => {
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
            Innovative, task-driven professional with 15+ years of experience in
            web design and development across various industries. Equipped with
            success in consistently identifying and providing technological
            needs of companies through ingenious innovation. <br></br> Now
            starting up as a freelancer.
          </p>
          <p></p>
        </div>
        <div className='section-2-content-2 center'>
          <div className='section-2-img-wrapper'>
            <img src={mathi} alt='MathiSudhanan' className='about-me-img' />
          </div>
        </div>
        <div className='section-2-content-3'>
          <p>
            Proficient in architecting application which includes developing
            databases, creating rest API, user interfaces with Responsive UI,
            writing and testing codes following clean code practices and TDD.
            Troubleshooting simple/complex issues and implementing new features
            based on the requirement and user feedback.
          </p>
        </div>
      </div>
      <div className='section-2-tags center'>
        {techStackItems.map((item: techStack) => {
          return (
            <div key={item.text} className='section-2-tag center'>
              <div className='section-2-tag-icon'>
                <img
                  src={item.imageSrcName}
                  alt={item.text}
                  className='section-2-icon'
                />
              </div>
              <div className='section-2-tag-icon-text'>{item.text}</div>

              <div className='section-2-tag-icon-years'>{item.years}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About2;
