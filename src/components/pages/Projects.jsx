import Project from "../UI/projectItem/Project";
import {projects} from "../../personalProjects";

const Projects = () => {


  return (
     <div className='projects__page'>
        {projects.map( (project, index) => 
        <div >
           <Project project={project}/>
           {index !== projects.length - 1 && <hr style={{width: '40%'}}/>}
        </div>
        )}
    </div>

  );
};

export default Projects;
