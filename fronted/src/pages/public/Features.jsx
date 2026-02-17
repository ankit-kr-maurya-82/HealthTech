import React from "react";
import "./css/Features.css";
import featuresImage from "../../assets/Objectives.png";

const Features = () => {
  return (
    <section className="features-page">
      <div className="features-hero">
        <p className="features-kicker">CareMe Features</p>
        <h1>Hospital‑grade capabilities, shown as clear outcomes.</h1>
        <p className="features-sub">
          The graph below represents how CareMe improves each key area of
          hospital workflow.
        </p>
      </div>

      <div className="features-graph">
        <img
          src={featuresImage}
          alt="Feature objectives"
          className="features-image"
        />
        <svg viewBox="0 0 640 260" role="img" aria-label="Features graph">
          <line x1="40" y1="20" x2="40" y2="220" className="axis" />
          <line x1="40" y1="220" x2="600" y2="220" className="axis" />

          <g className="bar">
            <rect x="70" y="90" width="80" height="130" rx="10" />
            <text x="110" y="240">Tracking</text>
            <text x="110" y="70">90%</text>
          </g>
          <g className="bar">
            <rect x="180" y="110" width="80" height="110" rx="10" />
            <text x="220" y="240">Advice</text>
            <text x="220" y="90">82%</text>
          </g>
          <g className="bar">
            <rect x="290" y="70" width="80" height="150" rx="10" />
            <text x="330" y="240">Workflow</text>
            <text x="330" y="50">95%</text>
          </g>
          <g className="bar">
            <rect x="400" y="125" width="80" height="95" rx="10" />
            <text x="440" y="240">Records</text>
            <text x="440" y="105">76%</text>
          </g>
          <g className="bar">
            <rect x="510" y="100" width="80" height="120" rx="10" />
            <text x="550" y="240">Support</text>
            <text x="550" y="80">86%</text>
          </g>
        </svg>
      </div>

      <div className="features-list">
        <div className="feature-item">
          <h3>Patient Health Tracking</h3>
          <p>Structured symptom timelines and daily habit monitoring.</p>
        </div>
        <div className="feature-item">
          <h3>Doctor Advice</h3>
          <p>Clear medicines, tests, and diet plans with follow‑ups.</p>
        </div>
        <div className="feature-item">
          <h3>Digital Workflow</h3>
          <p>Hospital‑style queues and collaboration built in.</p>
        </div>
        <div className="feature-item">
          <h3>Secure Records</h3>
          <p>Centralized patient history with role‑based access.</p>
        </div>
        <div className="feature-item">
          <h3>Care Support</h3>
          <p>Reminders and notifications that keep patients on track.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
