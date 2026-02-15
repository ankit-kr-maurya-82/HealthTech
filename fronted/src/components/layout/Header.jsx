import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import UserContext from "../../context/UserContext";
import "./css/Header.css";

const Header = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate(); // ✅ added

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

  const handleLogout = () => {
    logout();           // clear context + localStorage
    setMenuOpen(false); // close mobile menu
    navigate("/");      // ✅ redirect to Home
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          Careme
        </Link>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>

        <div className={`nav-section ${menuOpen ? "active" : ""}`}>
          <div className="sidebar-header">
            <FaTimes
              className="close-icon"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          <ul className="nav-links">
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>

            {!user && (
              <>
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
                <NavLink to="/team" className="nav-link">
                  Developer Team
                </NavLink>
              </>
            )}
          </ul>

          <div className="auth-buttons" ref={dropdownRef}>
            {!user ? (
              <>
                <div className="dropdown">
                  <button
                    className="btn primary"
                    onClick={() => {
                      setShowRegister(!showRegister);
                      setShowLogin(false);
                    }}
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
                    onClick={() => {
                      setShowLogin(!showLogin);
                      setShowRegister(false);
                    }}
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

                <span className="username">
                  {user.username} (
                  {user.role === "doctor" ? "Doctor" : "Patient"})
                </span>

                <button className="btn logout" onClick={handleLogout}>
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
