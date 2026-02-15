import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import UserContext from "../../context/UserContext";
import "./css/PatientHeader.css";

const PatientHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          Careme
        </Link>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-section ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <NavLink to="/patient/dashboard" className="nav-link">
              Dashboard
            </NavLink>

            <NavLink to="/patient/appointments" className="nav-link">
              Appointments
            </NavLink>

            <NavLink to="/patient/profile" className="nav-link">
              Profile
            </NavLink>
          </ul>

          <div className="user-profile">
            <FaUserCircle className="profile-icon" />
            <span className="username">
              {user?.username} (Patient)
            </span>

            <button className="btn logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default PatientHeader;
