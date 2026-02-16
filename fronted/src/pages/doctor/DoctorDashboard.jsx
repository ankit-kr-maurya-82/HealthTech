import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

const DoctorDashboard = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h2>Please login first</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome Dr. {user?.fullName}</h1>
      <p>Email: {user?.email}</p>
      <hr />

      <div style={{ marginTop: "20px" }}>
        <button>View Appointments</button>
        <button style={{ marginLeft: "10px" }}>Patient List</button>
        <button style={{ marginLeft: "10px" }}>Update Profile</button>
      </div>
    </div>
  );
};

export default DoctorDashboard;
