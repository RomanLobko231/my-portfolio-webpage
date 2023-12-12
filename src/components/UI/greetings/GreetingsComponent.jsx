import ContactsRow from "../contactsMain/ContactsRow";
import cl from "./GreetingsComponent.module.css"
const GreetingsComponent = () => {
  return (
    <div className={cl.container}>
      <div className={cl.inner__container}>
        <div className={cl.item}>
          <h1 className={cl.title__text}>Hi, my name is Roman Lobko</h1>
          <h2 className={cl.body__text}>{"> I am a software developer with experience and solid knoweledge in backend world and strong desire to learn even more. Aimed to improve my skills and get hands-on experience in IT branch, I am currently in search for a job as a Java + Spring junior developer."}</h2>
          <h1 className={cl.end__text}>Will you be the team I am looking for?</h1>
          <ContactsRow />
        </div>
        <img src="/personal_photo.jpg" className={cl.photo} alt="myself"/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
        <div class="scroll-down"></div>
      </div>
    </div>


  );
};

export default GreetingsComponent;
