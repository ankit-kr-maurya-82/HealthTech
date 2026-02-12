import React from "react";
import "./css/Team.css";

const Team = () => {
  const members = [
    {
      name: "Ankit Kumar Maurya",
      role: "Full Stack Developer",
      img: "https://via.placeholder.com/150"
    },
    {
      name: "Bhrantik Nagar",
      role: "UI/UX Designer",
      img: "https://via.placeholder.com/150"
    },
    {
      name: "Harsh Tiwari",
      role: "Database Designer",
      img: "https://via.placeholder.com/150"
    }
  ];

  return (
    <section className="team">
      <h2 className="team-title">Our Team</h2>

      <div className="team-container">
        {members.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
