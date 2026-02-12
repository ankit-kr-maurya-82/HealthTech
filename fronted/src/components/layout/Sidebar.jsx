import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ role }) => {
  // role = "patient" or "doctor"
  const patientLinks = [
    { name: "Dashboard", to: "/patient/dashboard" },
    { name: "Add Problem", to: "/patient/add-problem" },
    { name: "Doctor Advice", to: "/patient/advice" },
    { name: "Medicines", to: "/patient/medicines" },
    { name: "Tests", to: "/patient/tests" },
    { name: "Diet Tips", to: "/patient/diet-tips" },
  ];

  const doctorLinks = [
    { name: "Dashboard", to: "/doctor/dashboard" },
    { name: "Patient Requests", to: "/doctor/patient-requests" },
    { name: "Patient Details", to: "/doctor/patient-details" },
    { name: "History", to: "/doctor/history" },
  ];

  const links = role === "doctor" ? doctorLinks : patientLinks;

  return (
    <aside className="w-64 min-h-screen bg-white border-r shadow-lg">
      <div className="p-6 font-bold text-xl text-blue-600">
        {role === "doctor" ? "Doctor Panel" : "Patient Panel"}
      </div>

      <nav className="mt-6 flex flex-col gap-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-medium hover:bg-blue-100 ${
                isActive ? "bg-blue-200 text-blue-700" : "text-gray-700"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

