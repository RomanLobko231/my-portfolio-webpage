import {projects} from "../../personalProjects";
import ProjectWithLine from "../UI/projectItem/ProjectWithLine";

const Projects = () => {
  return (
     <div className='projects__page'>
        {projects.map( (project, index) => 
               <ProjectWithLine project={project} projects={projects} index={index}/>
        )}
        <a color='#5A7179' target='_blank' rel='noopener noreferrer' href="https://github.com/RomanLobko231">For Java Backend projects, please visit my Github</a>
    </div>

  );
};

export default Projects;
