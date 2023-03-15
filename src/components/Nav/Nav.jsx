import React from "react";
import SearchBar from "../Search/SearchBar";
import Navstyle from './Navstyle.module.css'
import { Link } from "react-router-dom";

const NavBar = ({onSearch}) => {
    return (
        <nav className={Navstyle.nav}>
          
          <div className={Navstyle.imagenNav}>
            <img src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" alt="R&M">
            </img>
          </div>

        <div className={Navstyle.botones}>
          <div className={Navstyle.links}>
            <Link to='home' className={Navstyle.home}>HOME</Link>
            <Link to='favorites' className={Navstyle.logout}>FAVORITES</Link>
            <Link to='about' className={Navstyle.about}>ABOUT</Link>
            <Link to='/' className={Navstyle.logout}>LOGOUT</Link>
          </div>
        </div>
        <SearchBar onSearch={onSearch}/>
      </nav>
      )
}




export default NavBar;