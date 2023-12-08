import SkillBox from "../skillbox/SkillBox";
import cl from "./SkillsetComponent.module.css"
import {canSkills, familiarSkills} from "../../../../skillset";

const SkillsetComponent = () => {
  return (
    <div className={cl.container}>
        <h1 className={cl.skillset__text}>Skillset</h1>
        <div className={cl.inner__container}>
          <SkillBox header="Can:" skillsList={canSkills}/>
          <SkillBox header="Familiar with:" skillsList={familiarSkills}/>

        </div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '10%'}}>
           <div class="scroll-down"></div>
        </div>

      </div>
  );
};

export default SkillsetComponent;
