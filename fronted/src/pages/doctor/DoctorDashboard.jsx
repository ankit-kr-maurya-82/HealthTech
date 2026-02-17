import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import "./css/DoctorDashboard.css";

const DoctorDashboard = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h2>Please login first</h2>;

  return (
    <div className="doctor-dashboard">
      <h1>Welcome Dr. {user?.fullName}</h1>
      <p>Email: {user?.email}</p>
      <p>Specialty: {user?.specialty}</p>
      <hr />

      <div className="dashboard-buttons">
        <button>View Appointments</button>
        <button>Patient List</button>
        <button>Update Profile</button>
      </div>
    </div>
  );
};

export default DoctorDashboard;
