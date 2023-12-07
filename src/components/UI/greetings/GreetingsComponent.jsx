import ContactsRow from "../contactsMain/ContactsRow";
import cl from "./GreetingsComponent.module.css"
const GreetingsComponent = () => {
  return (
    <div className={cl.container}>
        <div className={cl.item}>
          <h1 style={{ fontSize: '50px', color: '#574c4c' }}>Hi, my name is Roman Lobko</h1>
          <h2 style={{color: '#786362'}}>{"> I am a software developer with experience and solid knoweledge in backend world and strong desire to learn even more. Aimed to improve my skills and get hands-on experience in IT branch, I am currently in search for a job as a Java + Spring junior developer."}</h2>
          <h1 style={{color: '#5A7179'}}>Will you be the team I am looking for?</h1>
          <ContactsRow/>
        </div>
        <img src="/personal_photo.jpg" className={cl.photo} />
        <div class="scroll-down"></div>

      </div>

  );
};

export default GreetingsComponent;
