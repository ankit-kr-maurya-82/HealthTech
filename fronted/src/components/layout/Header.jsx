import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/Header.css"

const Header = ({ isLoggedIn }) => {
  return (
    <header className="">
      <nav className="">

        {/* Logo */}
        <Link to="/" className="">
          CareMe
        </Link>

        {/* Navigation */}
        <ul className="">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
              }
            >
              Explore
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className=""
              >
                Login
              </Link>

              <Link
                to="/register"
                className=""
              >
                Register
              </Link>
            </>
          ) : (
            <Link
              to="/dashboard"
              className=""
            >
              Dashboard
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;




<ankit>ankit</ankit>



