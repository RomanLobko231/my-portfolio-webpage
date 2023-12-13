import {projects} from "../../personalProjects";
import ProjectWithLine from "../UI/projectItem/ProjectWithLine";

const Projects = () => {
  return (
     <div className='projects__page'>
        {projects.map( (project, index) => 
        <div>
               <ProjectWithLine project={project} projects={projects} index={index}/>

        </div>
        

        )}
    </div>

  );
};

export default Projects;
