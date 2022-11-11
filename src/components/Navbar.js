import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo_stickey.png";
import '../styles/navBar.css'

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);

  return (
    <>
      <div className={`overlay ${menuBar ? 'active':''}`}></div>
      <div className="flex items-end justify-between px-8 py-5 bg-white">
        <Link to="/" className="">
          <img className="w-20 h-20" src={logo} alt="logo" />
        </Link>
        <button
          onClick={() => setMenuBar((prev) => !prev)}
          className={`menu-icon ${
            menuBar ? "active" : ""
          } relative w-20 h-14 rounded-md md:hidden`}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`mobile-menu-box ${menuBar ? 'toggleMenu' : ''}`}>
            <i className="menu-background top"/>
            <i className="menu-background middle"/>
            <i className="menu-background bottom"/>
            <ul className="menu">
                <li><NavLink to='/' onClick={()=>{setMenuBar(prev=>!prev)}} className={(({isActive})=>isActive?'activeNav':undefined)}>Home</NavLink> </li>
                <li><NavLink to='/about' onClick={()=>{setMenuBar(prev=>!prev)}} className={(({isActive})=>isActive?'activeNav':undefined)}>About</NavLink></li>
                <li><NavLink to='/Exercises' onClick={()=>{setMenuBar(prev=>!prev)}} className={(({isActive})=>isActive?'activeNav':undefined)}>Exercises</NavLink></li>
                <li><NavLink to='classes' onClick={()=>{setMenuBar(prev=>!prev)}} className={(({isActive})=>isActive?'activeNav':undefined)}>classes</NavLink></li>
                <li><NavLink to='contactUs' onClick={()=>{setMenuBar(prev=>!prev)}} className={(({isActive})=>isActive?'activeNav':undefined)}>ContactUs</NavLink></li>
            </ul>
        </div>
        <nav className="flex-1 ml-40 hidden md:block">
          <ul className="flex gap-10 text-lg font-bold">
            <Link to="/" className="">
              Home
            </Link>
            <Link to="/about">About</Link>
            <Link to="exercises">Exercises</Link>
            <Link to="classes">Classes</Link>
            <Link to="contactUs">Contact Us</Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
