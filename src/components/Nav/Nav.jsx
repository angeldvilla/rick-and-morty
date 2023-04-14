import React from "react";
import SearchBar from "../Search/SearchBar";
import Navstyle from './Navstyle.module.css'
import { NavLink, useLocation } from "react-router-dom";


const NavBar = ({onSearch}) => {

/*   const location = useLocation();

  const randomCharacter = () => {
    const idRandom = Math.floor(Math.random() * 826);
    onSearch(idRandom);
 } */

    return (
        <nav className={Navstyle.nav}>
          
          <div className={Navstyle.imagenNav}>
            <img src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" alt="R&M">
            </img>
          </div>

        <div className={Navstyle.botones}>
          <div className={Navstyle.links}>
          
          <NavLink to='/home' className={({isActive}) => isActive ? Navstyle.active : Navstyle.home}>
          <span class="material-symbols-outlined" style={{ width: '1.2em', height: '1.2em', marginRight: '0.2em', marginLeft: '2.3em' }}>
              home
              </span> 
              HOME
            </NavLink>
          
            {/* { location.pathname === '/home' ? 
            (<button className={Navstyle.home} onClick={randomCharacter}>RANDOM CHARACTHER</button>) 
            : null} */}
           
          <NavLink to='/favorites' className={({isActive}) => isActive ? Navstyle.active : Navstyle.favorites}>
            <svg viewBox="0 0 25 25" style={{ width: '1.2em', height: '1.2em', marginRight: '0.2em', marginLeft: '1.9em' }}>
            <path fill="currentColor" d="M12 2.2l2.928 6.167 6.535.953-4.734 4.741 1.115 6.522L12 17.222l-5.845 3.161 1.115-6.522L2.537 9.32l6.535-.953z"></path>
            </svg>
            FAVORITES
          </NavLink>
      
            <NavLink to='/about' className={({isActive}) => isActive ? Navstyle.active : Navstyle.about}>
            <span class="material-symbols-outlined" style={{ width: '1.2em', height: '1.2em', marginRight: '0.2em', marginLeft: '2.3em' }}>
            view_comfy_alt
            </span> ABOUT
            </NavLink>


             <NavLink to='/' className={({isActive}) => isActive ? Navstyle.active : Navstyle.logout}>
            <span class="material-symbols-outlined" style={{ width: '1.2em', height: '1.2em', marginRight: '0.2em', marginLeft: '1.9em' }}>
              logout
              </span> LOGOUT
            </NavLink>

          </div>
        </div>
        <SearchBar onSearch={onSearch}/>
      </nav>
      )
}

export default NavBar;