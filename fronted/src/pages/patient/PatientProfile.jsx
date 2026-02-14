import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

const PatientProfile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h2>Please login first</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Profile 👤</h2>

      <div style={{ marginTop: "20px" }}>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Gender:</strong> {user.gender || "Not set"}</p>
      </div>
    </div>
  );
};

export default PatientProfile;
