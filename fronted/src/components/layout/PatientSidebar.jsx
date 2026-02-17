import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiX,
  FiMenu,
  FiHome,
  FiBookOpen,
  FiUser,
  FiFileText,
  FiBarChart2,
  FiUsers,
  FiPlus
} from "react-icons/fi";
import "./css/PatientSidebar.css";

const PatientSidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // sidebar open/close

  return (
    <>
      {/* Hamburger icon to open sidebar if closed */}
      {!isOpen && (
        <button
          className="sidebar-toggle"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu size={24} />
        </button>
      )}

      <div className={`patient-sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h3>CareMe</h3>
          <button
            className="close-btn"
            onClick={() => setIsOpen(false)}
          >
            <FiX size={24} />
          </button>
        </div>

        <ul className="menu-list">
          <li>
            <Link to="/patient/dashboard">
              <FiHome className="menu-icon" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/patient/appointments">
              <FiBookOpen className="menu-icon" />
              Appointments
            </Link>
          </li>
          <li>
            <Link to="/patient/profile">
              <FiUser className="menu-icon" />
              Profile
            </Link>
          </li>
          <li>
            <Link to="/patient/add-problem">
              <FiFileText className="menu-icon" />
              Add Problem
            </Link>
          </li>
          <li>
            <Link to="/patient/advice">
              <FiFileText className="menu-icon" />
              Doctor Advice
            </Link>
          </li>
          <li>
            <Link to="/patient/reminder">
              <FiBarChart2 className="menu-icon" />
              Reminders
            </Link>
          </li>
          <li>
            <Link to="/patient/medicines">
              <FiBookOpen className="menu-icon" />
              Medicine
            </Link>
          </li>
          <li>
            <Link to="/patient/my-problems">
              <FiFileText className="menu-icon" />
              My Problems
            </Link>
          </li>
        </ul>

        <div className="menu-divider" />

        <div className="menu-section-title">Following</div>
        <ul className="menu-list">
          <li>
            <span className="menu-item-static">
              <FiUsers className="menu-icon" />
              My Doctors
              <span className="status-dot" />
            </span>
          </li>
          <li>
            <Link to="/patient/appointments">
              <FiPlus className="menu-icon" />
              Find doctors to follow
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PatientSidebar;
