import ContactsRow from "../UI/contactsMain/ContactsRow";
import GreetingsComponent from "../UI/greetings/GreetingsComponent";

const Main = () => {
  return (
    <div style={{ marginTop: '105px', marginBottom: '25px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <GreetingsComponent/>
      
        <h1 style={{marginTop: '10%', fontSize: '45px'}}>Skills</h1>
        <div style={{width: '80vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
          <h1>Can:</h1>
          <h1>Familiar with:</h1>
        </div>
    </div>

  );
};

export default Main;
