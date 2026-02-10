import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './css/Header.css'

const Header = () => {
  return (
    <header>
      <nav className='navbar'>

        {/* Logo */}
        <div className='logo'>
          <Link to="/">careme</Link>
        </div>

        {/* Navigation */}
        <ul className='nav_link'>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-child ${isActive ? "text-blue-700" : "text-gray-700"}`
              }
            >
              Home
            </NavLink>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className='auth'>
          <Link to="/login" className='login'>Login</Link>
          <Link to="/signup" className='signup'>Signup</Link>
        </div>

      </nav>
    </header>
  )
}

export default Header
