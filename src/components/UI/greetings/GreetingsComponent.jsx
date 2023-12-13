import { useEffect, useState } from "react";
import DesktopComponent from "./DesktopComponent";
import cl from "./GreetingsComponent.module.css"
import MobileComponent from "./MobileComponent";
const GreetingsComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define a threshold width for conditional rendering
  const thresholdWidth = 1050;

  return (
    <div className={cl.container}>
      {windowWidth < thresholdWidth ? (
        <MobileComponent /> 
      ) : (
        <DesktopComponent /> 
      )}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
        <div class="scroll-down"></div>
      </div>
    </div>


  );
};

export default GreetingsComponent;
