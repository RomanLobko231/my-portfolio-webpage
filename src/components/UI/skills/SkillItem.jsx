import cl from "./SkillItem.module.css"

const SkillItem = ({ imageUrl, text }) => {
  return (
    <div className={cl.square}>
       <img className={cl.image__container} src="/java.png"/>
    <div className={cl.text__container}>
      <p>{"text"}</p>
    </div>
        
    
  </div>
  );
};

export default SkillItem;
