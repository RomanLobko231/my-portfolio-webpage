import ContactsRow from "../UI/contactsMain/ContactsRow";
import GreetingsComponent from "../UI/greetings/GreetingsComponent";
import SkillItem from "../UI/skills/SkillItem";

const Main = () => {
  return (
    <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <GreetingsComponent />
      <div style={{ height: '100vh', width: '80vw', }}>
        <h1 style={{ marginTop: '10%', fontSize: '55px', textAlign: 'center', color: '#574c4c' }}>Skillset</h1>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '5%' }}>
          <div style={{ display: 'flex', width: '50%', display: 'flex', flexDirection: 'column', }}>
            <h1 style={{textAlign: 'center'}}>Can:</h1>
            <div className="skill__container">
              <SkillItem />
              <SkillItem />
              <SkillItem />
              <SkillItem />
              <SkillItem />
            </div>
          </div>
          <div style={{ display: 'flex', width: '50%', display: 'flex', flexDirection: 'column' }}>
           <h1  style={{textAlign: 'center'}}>Familiar with:</h1>
            <div className="skill__container">
              <SkillItem />
              <SkillItem />
              <SkillItem />
            </div>
          </div>

        </div>
      </div>

    </div>

  );
};

export default Main;
