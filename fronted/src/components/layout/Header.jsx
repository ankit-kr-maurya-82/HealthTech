import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import Logo from "../../assets/caremeTransparent.png";
import "./css/Header.css";

const Header = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = false;

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setShowRegister(false);
        setShowLogin(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="header">
      <nav className="navbar">

        {/* Logo */}
        <Link to="/" className="logo">
          {/* <img src={Logo} alt="CareMe" /> */}
          Careme
        </Link>

        {/* Mobile Toggle */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-section ${menuOpen ? "active" : ""}`}>

          {/* Links */}
          <ul className="nav-links">
            <NavLink to="/" end className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
            <NavLink to="/team" className="nav-link">Developer Team</NavLink>
          </ul>

          {/* Auth */}
          <div className="auth-buttons" ref={dropdownRef}>

            {!isLoggedIn ? (
              <>
                <div className="dropdown">
                  <button
                    className="btn primary"
                    onClick={() => setShowRegister(!showRegister)}
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

                <div className="dropdown">
                  <button
                    className="btn outline"
                    onClick={() => setShowLogin(!showLogin)}
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
              </>
            ) : (
              <FaUserCircle className="profile-icon" />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};



export default Header;
