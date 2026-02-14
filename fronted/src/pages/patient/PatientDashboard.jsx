import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

const PatientDashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome {user?.username || "Patient"} 👋</h1>
      <p>Your role: {user?.role || "Patient"}</p>
    </div>
  );
};

export default PatientDashboard;
