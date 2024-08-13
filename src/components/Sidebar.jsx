import React from 'react'

import {NavLink } from 'react-router-dom'


function Sidebar({menu}) {
  return (
    <div className="navbar" style={{left:menu==="open"?"0px":""}}>
        <a className="logo" to="/">
    <div className="hlogo">H</div>
        <div className='name'>Harsh</div>
        </a>
        <nav>
          <NavLink activeclassname="active" to='/'>
          <i className="fa-solid fa-house icon"></i>
          </NavLink>
          <NavLink activeclassname="active" className='about' to='/about'>
          <i className="fa-regular fa-user icon"></i>
          </NavLink>
          <NavLink activeclassname="active" className='skills' to='/skills'>
          <i className="fa-solid fa-gear icon"></i>
          </NavLink>
          <NavLink activeclassname="active" className='projects' to='/projects'>
          <i className="fa-regular fa-eye"></i>
          </NavLink>
          <NavLink activeclassname="active" className='contact' to='/contact'>
          <i className="fa-regular fa-envelope"></i>
          </NavLink>
        </nav>
        <ul>
          <li>
            <a target='_blank' href='https://www.linkedin.com/in/harshbisla78/'><i className="fa-brands fa-linkedin"></i></a>
          </li>
          <li>
          <a href='https://github.com/Harsh-Bisla' target='_blank'><i className="fa-brands fa-github"></i></a>
          </li>
          <li>
          <a href='#'><i className="fa-solid fa-inbox"></i></a>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar