import { projectExperience } from "../models/projectExperience";

interface Props {
  companyName: string;
  projects: projectExperience[];
}

const ProjectExperience = (props: Props) => {
  return (
    <div className='exp-content'>
      <h1>{props.companyName}</h1>
      {props.projects.map((proj) => {
        return (
          <div key={proj.id}>
            <div className='proj-header'>
              <div className='proj-key-head exp-content-left-sec'>
                Project:{" "}
              </div>
              <div className='proj-header-text exp-content-right-sec'>
                {proj.name}
              </div>
            </div>
            <div className='proj-techStack'>
              <div className='proj-key-techStack exp-content-left-sec'>
                Technologies:{" "}
              </div>
              <div className='proj-techStack-text exp-content-right-sec'>
                {proj.techStack}
              </div>
            </div>

            {proj.clients && (
              <div className='proj-clients'>
                <div className='proj-key-clients exp-content-left-sec'>
                  Clients:{" "}
                </div>
                <div className='proj-clients-text exp-content-right-sec'>
                  {proj.clients}
                </div>
              </div>
            )}
            <div className='proj-desc'>
              <div className='proj-key-desc exp-content-left-sec'>
                Description:{" "}
              </div>
              <div className='proj-desc-text exp-content-right-sec'>
                {proj.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectExperience;
