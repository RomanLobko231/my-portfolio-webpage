import GreetingsComponent from "../UI/greetings/GreetingsComponent";
import SkillsetComponent from "../UI/skills/skillset/SkillsetComponent";

const Main = () => {
  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <GreetingsComponent />
      <SkillsetComponent />
      <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', height: '100vh', width:'100vh', marginTop: '8%', marginBottom: '25px'}}>
      <iframe
      title="cv"
        src="/cv.pdf" 
        type="application/pdf"
        style={{width: '900px', height: '1200px'}}
      />
      </div>
    </div>

  );
};

export default Main;
