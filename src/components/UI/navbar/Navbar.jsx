import cl from './Navbar.module.css'
import { Link, NavLink, useNavigate } from "react-router-dom";


const Navbar = () => {
 const navigate = useNavigate()

  return (
    <nav className={cl.navbar}>
      {/* <div className={cl.text__container}>
         <span className={cl.customText} onClick={() => {navigate('')}}>Roman Lobko</span>
      </div>
      <div className={cl.spacer}/>
      <div className={cl.navbar__links}>
        <Link to='/personal-projects'>My Projects</Link>
        <Link to='/blog'>Blog</Link>
      </div> */}

      
      <div className={cl.container}>
      <div className={cl.text__container}>
         <span className={cl.customText} onClick={() => {navigate('')}}>Roman Lobko{window.location.pathname}</span>
      </div>
        <div className='navElements'>
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
