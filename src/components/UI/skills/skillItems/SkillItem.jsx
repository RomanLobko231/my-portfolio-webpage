import cl from "./SkillItem.module.css"

const SkillItem = ({ name, src }) => {
  return (
    <div className={cl.square}>
       <img className={cl.image__container} src={src} alt="skill"/>
    <div className={cl.text__container}>
      <p>{name}</p>
    </div>
        
    
  </div>
  );
};

export default SkillItem;
