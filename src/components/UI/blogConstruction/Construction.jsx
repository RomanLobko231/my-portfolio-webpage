import cl from "./Construction.module.css"


const Construction = () => {
  return (
    <div className={cl.container}>
      <img style={{borderRadius: '12px', height: '40%', width: '40%'}}src="/construction.gif" alt="Construction"/>
      <h1 style={{color:"#5A7179"}}>This page is currently under construction...</h1>
      <h3 style={{color:"#5A7179"}}>Estimated build time: 3-4 days</h3>
    </div>
  );
};

export default Construction;
