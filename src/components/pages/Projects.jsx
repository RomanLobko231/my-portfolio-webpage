import Project from "../UI/projectItem/Project";
import {projects} from "../../personalProjects";

const Projects = () => {


  return (
    
     <div style={{width: '100%', marginTop: '75px', marginBottom: '25px', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
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
