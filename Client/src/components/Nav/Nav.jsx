import React from "react";
import SearchBar from "../Search/SearchBar";
import Navstyle from './Navstyle.module.css'
import { NavLink } from "react-router-dom";


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
          
          <div className={Navstyle.scaleupLeft}>
          <div className={Navstyle.imagenNav}>
            <img src= "https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
            alt="R&M" />
          </div> </div>

        <div className={Navstyle.botones}>
          <div className={Navstyle.scaleupVerticalcenter}>
          <div className={Navstyle.links}>
          
          <NavLink to='/home' className={({isActive}) => isActive ? Navstyle.active : Navstyle.home}>
            <img src="https://www.pngall.com/wp-content/uploads/2016/04/Home-Download-PNG.png" alt="Home Icon"
            style={{ width: '1.2em', height: '1.2em', marginRight: '0.2em', marginLeft: '1.6em' }}/>
      
              HOME
            </NavLink>
          
            {/* { location.pathname === '/home' ? 
            (<button className={Navstyle.home} onClick={randomCharacter}>RANDOM CHARACTHER</button>) 
          : null} */}
           
          <NavLink to='/favorites' className={({isActive}) => isActive ? Navstyle.activeFav : Navstyle.favorites}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Estrella_amarilla.png" alt="Favorites Icon"
           style={{ width: '1.2em', height: '1.2em', marginRight: '0.2em', marginLeft: '1.3em' }} />
            
            FAVORITES
          </NavLink>
          
      
            <NavLink to='/about' className={({isActive}) => isActive ? Navstyle.active : Navstyle.about}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Eo_circle_amber_info.svg/1200px-Eo_circle_amber_info.svg.png" alt="About Icon"
             style={{ width: '1.2em', height: '1.2em', marginRight: '0.2em', marginLeft: '1.5em' }}/>
            
             ABOUT
            </NavLink>

          <SearchBar onSearch={onSearch}/>

         {/*  <button onClick={logout} className={({isActive}) => isActive ? Navstyle.active : Navstyle.logout} style={{ textDecoration: 'none', background: 'none', border: 'none', padding: '0', cursor: 'pointer' }}>
          <img src="https://www.eltiomediafire.com/store/wp-content/uploads/2021/07/pocket-mortys.png" alt="Logout Icon" style={{ width: '1.4em', height: '1.2em', marginRight: '0.2em', marginLeft: '0.4em' }} />
          <span className="material-symbols-outlined">logout</span>
          </button> */}
             
            <NavLink to='/' className={({isActive}) => isActive ? Navstyle.active : Navstyle.logout}>
            <img src="https://www.eltiomediafire.com/store/wp-content/uploads/2021/07/pocket-mortys.png" alt="Logout Icon" style={{ width: '1.4em', height: '1.2em', marginRight: '0.2em', marginLeft: '0.4em' }}></img>
            <span className="material-symbols-outlined">
            logout
            </span>
            </NavLink>

          </div>
          </div>
        </div>
      </nav>
      )
}

export default NavBar;