import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './css/Header.css'

const Header = () => {
  return (
    <header>
        <nav>
            <div>
                {/* logo */}
                <Link 
                to="/">
                    careme 
                    <img src="" alt="" />
                </Link>
                <div>
                    <Link to={'/login'} className='login'>Login</Link>
                    <Link to={'/signup'} className='signup'>Signup</Link>
                </div>
                <div className='nav_link'>
                    <ul>
                        <li>
                            <NavLink
                            className={({isActive}) => `text-blue-200 ${isActive ? "text-blue-700" : "text-grey-700"}`}>
                                Home
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header
