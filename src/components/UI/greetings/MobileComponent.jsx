import ContactsRow from "../contactsMain/ContactsRow";
import cl from "./GreetingsComponent.module.css"

const MobileComponent = () => {
  return (
    <div className={cl.inner__container}>
        <img src="/personal_photo.jpg" className={cl.photo} alt="myself" />
      <div className={cl.item}>
         
              <h1 className={cl.title__text}>Hi, my name is Roman Lobko</h1>
              <h2 className={cl.body__text}>{"> I am a software developer with experience and solid knoweledge in backend world and strong desire to learn even more. Aimed to improve my skills and get hands-on experience in IT branch, I am currently in search for a job as a Java + Spring junior developer."}</h2>
              <h1 className={cl.end__text}>Will you be the team I am looking for?</h1>
              <ContactsRow/>
            </div>
    </div>
  );
};

export default MobileComponent;
