import { useState } from 'react';
import cl from './Navbar.module.css'
import { NavLink, useNavigate } from "react-router-dom";


const Navbar = () => {
 const navigate = useNavigate()
 const [showNavbar, setShowNavbar] = useState(false)

 const handleShowNavbar = () => {
   setShowNavbar(!showNavbar)
 }

  return (
    <nav className={cl.navbar}>
      <div className={cl.container}>
      <div className={cl.text__container}>
         <span className={cl.customText} onClick={() => {navigate('')}}>Roman Lobko</span>
      </div>
      <div className="menu-icon" onClick={handleShowNavbar}>
          <img src='/menu_icon.png' alt='Menu' style={{objectFit: 'contain', width: '33%', height: '33%'}}/>
        </div>
        <div className={`navElements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Main</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/personal-projects">Projects</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
