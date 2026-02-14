import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import PatientSidebar from "./PatientSidebar";

const PatientLayout = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) return <div>Loading...</div>;

  // protect route
  if (!user || user.role !== "patient") {
    return <Navigate to="/login" />;
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <PatientSidebar />

      {/* Main content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>

    </div>
  );
};

export default PatientLayout;
