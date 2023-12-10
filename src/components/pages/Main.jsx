import GreetingsComponent from "../UI/greetings/GreetingsComponent";
import SkillsetComponent from "../UI/skills/skillset/SkillsetComponent";

const Main = () => {
  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <GreetingsComponent />
      <SkillsetComponent />
    </div>

  );
};

export default Main;
