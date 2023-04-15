import React from "react";
import SearchBar from "../Search/SearchBar";
import Navstyle from './Navstyle.module.css'
import { Link, NavLink, useLocation } from "react-router-dom";


const NavBar = ({onSearch}) => {

/*   const location = useLocation();

  const randomCharacter = () => {
    const idRandom = Math.floor(Math.random() * 826);
    onSearch(idRandom);

    const handleLogOut = () => {
      setAccess(false);
    }
 } */

    return (
      <nav className={Navstyle.nav}>
          
          <div className={Navstyle.trackingInContract}>
          <div className={Navstyle.imagenNav}>
            <img src="https://www.eltiomediafire.com/store/wp-content/uploads/2021/07/pocket-mortys.png"
            alt="R&M" />
          </div> </div>

        <div className={Navstyle.botones}>
          <div className={Navstyle.links}>
          
          <NavLink to='/home' className={({isActive}) => isActive ? Navstyle.active : Navstyle.home}>
            <img src="https://media.tenor.com/uF8rAQ4NN5wAAAAC/rick-sanchez-rick-and-morty.gif"style={{ width: '1.2em', height: '1.2em', marginRight: '0.2em', marginLeft: '2.8em' }}/>
      
              HOME
            </NavLink>
          
            {/* { location.pathname === '/home' ? 
            (<button className={Navstyle.home} onClick={randomCharacter}>RANDOM CHARACTHER</button>) 
          : null} */}
           
          <NavLink to='/favorites' className={({isActive}) => isActive ? Navstyle.active : Navstyle.favorites}>
            <img src="https://media.tenor.com/SPZDWMLgA0gAAAAC/rick-kiss-rick-and-morty-kiss.gif" style={{ width: '1.2em', height: '1.2em', marginRight: '0.2em', marginLeft: '1.9em' }} />
            
            FAVORITES
          </NavLink>
          
          <SearchBar onSearch={onSearch}/>
      
            <NavLink to='/about' className={({isActive}) => isActive ? Navstyle.active : Navstyle.about}>
            <img src="https://media.tenor.com/5mQ6UldmCQ4AAAAC/rickand-morty-rick.gif" style={{ width: '1.2em', height: '1.2em', marginRight: '0.2em', marginLeft: '2.9em' }}/>
            
             ABOUT
            </NavLink>


             {/* <button onClick={handleLogOut}>LOGOUT</button> */}
             
             <NavLink to='/' className={({isActive}) => isActive ? Navstyle.active : Navstyle.logout}>
            <img src="https://media.tenor.com/doUcitxR2acAAAAC/rick-and-morty-smirk.gif" style={{ width: '1.2em', height: '1.2em', marginRight: '0.2em', marginLeft: '4.8em' }}></img>
             {/* LOGOUT */}<span class="material-symbols-outlined">
            logout
            </span>
            </NavLink>

          </div>
        </div>
      </nav>
      )
}

export default NavBar;