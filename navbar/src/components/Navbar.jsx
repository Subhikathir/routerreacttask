import React from 'react'
import{Link, NavLink} from "react-router-dom"
import "./Navbar.css"


export const Navbar = () => {
  return (<nav>
    <Link to="/" className='title'>Website</Link>
    <div className='menu'>
        <span></span>
        <span></span>
        <span></span>

    </div>
    <ul>
        <li><NavLink to="/all">All</NavLink></li>
        <li><NavLink to="/fullstackdeveloper">Fullstack Developer</NavLink></li>
        <li><NavLink to="/datascience">Datascience</NavLink></li>
        <li><NavLink to="/cybersecurity">Cyber Security</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
        
    </ul>
  </nav>
)}
