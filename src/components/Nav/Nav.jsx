import React from "react";
import SearchBar from "../Search/SearchBar";
import Navstyle from './Navstyle.module.css'
import { NavLink } from "react-router-dom";


const NavBar = ({onSearch}) => {
    return (
        <nav className={Navstyle.nav}>
          
          <div className={Navstyle.imagenNav}>
            <img src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" alt="R&M">
            </img>
          </div>

        <div className={Navstyle.botones}>
          <div className={Navstyle.links}>
          <NavLink to='/home' className={({isActive}) => isActive ? Navstyle.active : Navstyle.home}>
          <span class="material-symbols-outlined">
              home
              </span> HOME
            </NavLink>
           
            <NavLink to='/favorites' className={({isActive}) => isActive ? Navstyle.active : Navstyle.favorites}>
            <span class="material-symbols-outlined">
              star
              </span> FAVORITES
            </NavLink>

            <NavLink to='/about' className={({isActive}) => isActive ? Navstyle.active : Navstyle.about}>
            <span class="material-symbols-outlined">
            view_comfy_alt
            </span> ABOUT
            </NavLink>


             <NavLink to='/' className={({isActive}) => isActive ? Navstyle.active : Navstyle.logout}>
            <span class="material-symbols-outlined">
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