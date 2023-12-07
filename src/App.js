import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/pages/AppRouter';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      
        <AppRouter />
    
    </BrowserRouter>
  );
}

export default App;
