import React from "react";
import members from "./teamData.json";
import "./css/Team.css";

const Team = () => {
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
