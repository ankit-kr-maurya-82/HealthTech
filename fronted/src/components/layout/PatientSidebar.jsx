import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi"; // close & menu icons
import "./css/PatientSidebar.css";

const PatientSidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // sidebar open/close

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
          <h3>Patient Panel</h3>
          <button
            className="close-btn"
            onClick={() => setIsOpen(false)}
          >
            <FiX size={24} />
          </button>
        </div>

        <ul>
          <li><Link to="/patient/dashboard">Dashboard</Link></li>
          <li><Link to="/patient/appointments">Appointments</Link></li>
          <li><Link to="/patient/profile">Profile</Link></li>
          <li><Link to="/patient/add-problem">Add Problem</Link></li>
          <li><Link to="/patient/advice">Doctor Advice</Link></li>
          <li><Link to="/patient/reminder">Reminders</Link></li>
          <li><Link to="/patient/medicines">Medicines</Link></li>
          <li><Link to="/patient/my-problems">My Problems</Link></li>
        </ul>
      </div>
    </>
  );
};

export default PatientSidebar;
