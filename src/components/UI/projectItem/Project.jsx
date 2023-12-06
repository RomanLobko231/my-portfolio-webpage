import { Link } from "react-router-dom";
import Carousel from "../carousel/Carousel";

const Project = ({project}) => {

    return (
       
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
            }}>
                <div style={{ width: '20%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px'}}>
                <h1>{project.name}</h1>
                <a target='_blank' rel='noopener noreferrer' href={project.link}>#link to github</a>
                </div>
                <Carousel images={project.src} />
                <p style={{width: '60%'}}>{project.description}</p>
            </div>
    );
};

export default Project;
