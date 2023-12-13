import Carousel from "../carousel/Carousel";
import cl from "./Project.module.css"

const Project = ({project}) => {

    return (
       
            <div className={cl.container}>
                <div className={cl.project__title}>
                <h1 style={{color: '#574c4c'}}>{project.name}</h1>
                {project.link !== '' && <a target='_blank' rel='noopener noreferrer' href={project.link}>#link to github</a>}
                </div>
                <Carousel images={project.src} />
                <p style={{whiteSpace: 'pre-line'}}className={cl.project__description}>{project.description}</p>
            </div>
    );
};

export default Project;
