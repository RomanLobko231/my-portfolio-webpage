import SkillItem from "../skillItems/SkillItem";
import cl from "./SkillBox.module.css"

const SkillBox = (props) => {
    return (
        <div className={cl.skills__box}>
            <h1 style={{ textAlign: 'center', color: '#574c4c' }}>{props.header}</h1>
            <div className={cl.skill__container}>
                {props.skillsList.map(skill =>
                    <SkillItem name={skill.name} src={skill.src}/>
                )}
            </div>
        </div>

    );
};

export default SkillBox;
