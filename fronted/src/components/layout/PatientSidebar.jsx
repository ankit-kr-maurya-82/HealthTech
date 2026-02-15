import React from "react";
import { Link } from "react-router-dom";

const PatientSidebar = () => {
  return (
    <div style={{ width: "220px", background: "#f5f5f5", padding: "20px" }}>
      <h3>Patient Panel</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
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
  );
};

export default PatientSidebar;
