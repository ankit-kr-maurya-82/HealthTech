import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import UserContext from "../../context/UserContext";
import "./css/Header.css";

const Header = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { user, logout } = useContext(UserContext); // ✅ context

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
        <Link to="/" className="logo">Careme</Link>

        {/* Mobile Toggle */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-section ${menuOpen ? "active" : ""}`}>
          {/* Links */}
          <ul className="nav-links">
            <NavLink to="/" end className="nav-link">Home</NavLink>

            {/* Only show these if user NOT logged in */}
            {!user && (
              <>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                <NavLink to="/team" className="nav-link">Developer Team</NavLink>
              </>
            )}
          </ul>

          {/* Auth Buttons */}
          <div className="auth-buttons" ref={dropdownRef}>
            {!user ? (
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
              <div className="user-profile">
                <FaUserCircle className="profile-icon" />
                {/* ✅ Show username + role */}
                <span className="username">
  {user.username} ({user.role === "doctor" ? "Doctor" : "Patient"})
</span>


                {/* ✅ Logout */}
                <button
                  className="btn logout"
                  onClick={() => {
                    logout();          // clear context & localStorage
                    setMenuOpen(false); // close mobile menu
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
