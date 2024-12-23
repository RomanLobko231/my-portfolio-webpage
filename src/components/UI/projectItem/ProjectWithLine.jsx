import Project from "./Project";
import cl from "./ProjectWithLine.module.css";
const ProjectWithLine = ({ project, projects, index }) => {
  return (
    <div className={cl.container}>
      <Project project={project} />
      <hr className={cl.divider} />
    </div>
  );
};

export default ProjectWithLine;
