import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">

        {/* Logo */}
        <Link to="/" className="logo">
          CareMe
        </Link>

        {/* Nav Links */}
        <ul className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>

        {/* Auth Buttons */}
        <div className="auth-buttons">

          {/* Register */}
          <div className="dropdown">
            <button
              onClick={() => setShowRegister(!showRegister)}
              className="btn primary"
            >
              Register
            </button>

            {showRegister && (
              <div className="dropdown-menu">
                <Link to="/register/patient">Patient Register</Link>
                <Link to="/register/doctor">Doctor Register</Link>
              </div>
            )}
          </div>

          {/* Login */}
          <div className="dropdown">
            <button
              onClick={() => setShowLogin(!showLogin)}
              className="btn outline"
            >
              Login
            </button>

            {showLogin && (
              <div className="dropdown-menu">
                <Link to="/login/patient">Patient Login</Link>
                <Link to="/login/doctor">Doctor Login</Link>
              </div>
            )}
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
