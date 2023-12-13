import { useEffect, useState } from "react";
import GreetingsComponent from "../UI/greetings/GreetingsComponent";
import SkillsetComponent from "../UI/skills/skillset/SkillsetComponent";
import MobileCV from "../UI/cv/MobileCV";
import DesktopCV from "../UI/cv/DesktopCV";

const Main = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const thresholdWidth = 1050;


  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <GreetingsComponent />
      <SkillsetComponent />
      <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width:'100%', marginTop: '8%', marginBottom: '25px'}}>
        <h1 style={{
          
    fontSize: '55px',
    textAlign: 'center',
    color: '#2f234f'
    }}>CV</h1>
      {windowWidth < thresholdWidth ? (
        <MobileCV/>
      ) : (
        <DesktopCV/>
      )}
      </div>
    </div>

  );
};

export default Main;
