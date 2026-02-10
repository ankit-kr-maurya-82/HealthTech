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
                    Logo
                </Link>
                <div>
                    <Link to={'/login'} className='login'>Login</Link>
                    <Link to={'/signup'} className='signup'>Signup</Link>
                </div>
                <div>
                    <ul>
                        <li>
                            <NavLink
                            className={({isActive}) => `text-grey-20`}>
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
