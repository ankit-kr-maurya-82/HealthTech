import React from "react";
import "./css/Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to CareMe</h1>
        <p>
          Smart Digital Healthcare Platform where patients submit problems
          and doctors provide medicines, tests and diet advice.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Explore</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Platform Features</h2>

        <div className="feature-grid">

          <div className="card">
            <h3>Patient Health Tracking</h3>
            <p>Patients can add symptoms and daily habits.</p>
          </div>

          <div className="card">
            <h3>Doctor Advice</h3>
            <p>Doctors provide medicines, tests and diet plans.</p>
          </div>

          <div className="card">
            <h3>Digital Workflow</h3>
            <p>Real hospital style patient-doctor system.</p>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>User Feedback</h2>

        <div className="testimonial-card">
          Very easy platform to track health digitally.
        </div>

        <div className="testimonial-card">
          Doctors can easily suggest tests and diet.
        </div>
      </section>

    </div>
  );
};

export default Home;
