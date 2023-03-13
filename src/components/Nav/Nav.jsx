import React from "react";
import SearchBar from "../Search/SearchBar";
import Navstyle from './Navstyle.module.css'
import { Link } from "react-router-dom";

const NavBar = ({onSearch}) => {
    return (
      
          <nav className={Navstyle.nav}>
            <div className={Navstyle.botones}>
            <Link to='home' className={Navstyle.home} >HOME</Link>
            <Link to='about' className={Navstyle.home} >ABOUT</Link>
            <Link to='/' className={Navstyle.logout}>LOGOUT</Link>
            </div>
          <SearchBar onSearch={onSearch}/>
          </nav>
        )
}




export default NavBar;