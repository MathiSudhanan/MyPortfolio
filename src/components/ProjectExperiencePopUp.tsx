import React from "react";
import { expData } from "../portfolioData";
import ProjectExperience from "./ProjectExperience";

type Props = {};

const ProjectExperiencePopUp = (props: Props) => {
  console.log(expData);

  return (
    <div className='tabs'>
      {expData.map((comp) => {
        let rid = "rd" + comp.id;
        return (
          <div key={comp.id} className='tab'>
            <input className='accord-rdo' type='checkbox' id={rid} />
            <label className='tab-label' htmlFor={rid}>
              <div className='prof-exp'>
                <div className='prof-company'>
                  <label>Company Name: {comp.company}</label>
                </div>
                <div className='prof-period'>
                  <label>Period: {comp.date}</label>
                </div>
                <div className='prof-role'>
                  <label>Role: {comp.position}</label>
                </div>
              </div>
            </label>
            <div className='tab-content'>
              <ProjectExperience
                projects={comp.projects}
                companyName={comp.company}
              ></ProjectExperience>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectExperiencePopUp;
