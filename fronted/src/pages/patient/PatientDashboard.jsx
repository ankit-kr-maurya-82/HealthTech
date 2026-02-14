import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

const PatientDashboard = () => {
  const { user } = useContext(UserContext);
  const [search, setSearch] = useState("");

  if (!user) return <h2>Please login first</h2>;
  if (user.role?.toLowerCase() !== "patient")
    return <h2>Access Denied</h2>;

  return (
    <div style={{ padding: "20px" }}>
      
      {/* Header */}
      <div>
        <h1>Welcome {user.username ?? "Patient"} 👋</h1>
        <p>Your role: {user.role ?? "Patient"}</p>
      </div>

      {/* Search Box */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Search doctors, appointments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>

    </div>
  );
};

export default PatientDashboard;
