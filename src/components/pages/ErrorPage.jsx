import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()

  return (
    <div style={{display:"flex", flexDirection: 'column', alignItems: 'center', justifyContent: "center"}}>
        <h1 style={{color: 'palevioletred', fontWeight: "bold"}}>Such page does not exist, please check the URL address</h1>
        <button onClick={() => {navigate('/')}}>Back to main page?</button>
    </div>
  );
};

export default ErrorPage;
