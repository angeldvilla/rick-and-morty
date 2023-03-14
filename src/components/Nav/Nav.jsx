import React from "react";
import SearchBar from "../Search/SearchBar";
import Navstyle from './Navstyle.module.css'
import { Link } from "react-router-dom";

const NavBar = ({onSearch}) => {
    return (
        <nav className={Navstyle.nav}>
          <div className={Navstyle.imagenNav}>
            <img src="https://i.gifer.com/Ifpd.gif"/* "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c50a4a55883023.5996f8afa3f5c.gif" */ alt="">
            </img>
          </div>
        <div className={Navstyle.botones}>
          <div className={Navstyle.links}>
            <Link to='home' className={Navstyle.home}>HOME</Link>
            <Link to='about' className={Navstyle.about}>ABOUT</Link>
            <Link to='/' className={Navstyle.logout}>LOGOUT</Link>
          </div>
        </div>
        <SearchBar onSearch={onSearch}/>
      </nav>
      )
}




export default NavBar;