import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./css/PatientDashboard.css";
import UserContext from "../../context/UserContext";

const PatientDashboard = () => {
  const { user } = useContext(UserContext);

  const cards = [
    {
      title: "Appointments",
      desc: "View upcoming doctor visits",
      icon: "📅",
      link: "/appointments",
    },
    {
      title: "Health Records",
      desc: "Check your medical history",
      icon: "📄",
      link: "/health-records",
    },
    {
      title: "Diet Plan",
      desc: "Doctor recommended diet",
      icon: "🥗",
      link: "/diet-plan",
    },
    {
      title: "Messages",
      desc: "Chat with your doctor",
      icon: "💬",
      link: "/messages",
    },
  ];

  return (
    <div className="patient-dashboard">
      <h1 className="dashboard-title">
        Welcome {user?.username || "Patient"} 👋
      </h1>

      <div className="dashboard-cards">
        {cards.map((card, index) => (
          <Link key={index} to={card.link} className="card">
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PatientDashboard;
