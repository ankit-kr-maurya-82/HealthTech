import React from "react";
import "./css/PatientDashboard.css";

const PatientDashboard = () => {
  return (
    <div className="patient-dashboard">

      <h1 className="dashboard-title">
        Welcome Patient 👋
      </h1>

      <div className="dashboard-cards">

        <div className="card">
          <h3>Appointments</h3>
          <p>View upcoming doctor visits</p>
        </div>

        <div className="card">
          <h3>Health Records</h3>
          <p>Check your medical history</p>
        </div>

        <div className="card">
          <h3>Diet Plan</h3>
          <p>Doctor recommended diet</p>
        </div>

        <div className="card">
          <h3>Messages</h3>
          <p>Chat with your doctor</p>
        </div>

      </div>

    </div>
  );
};

export default PatientDashboard;
