import Project from "./Project";
import cl from './ProjectWithLine.module.css'
const ProjectWithLine = ({project, projects, index}) => {
  return (
    <div className={cl.container}>
           <Project project={project}/>
           {index !== projects.length - 1 && <hr style={{width: '40%'}}/>}
        </div>
  );
};

export default ProjectWithLine;
