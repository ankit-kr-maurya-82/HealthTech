import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/PatientRegister.css"
 
const PatientRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    role: "patient",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Patient Register Data:", formData);

    // 👉 later API connect
    // axios.post("/api/auth/register", formData)

    navigate("/login");
  };

  return (
    <div className="dragon-main">
      <div className="dragon-card">

        <h2 className="dragon-h2">
          Patient Registration
        </h2>

        <form onSubmit={handleSubmit} className="dragon-form">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="dragon-selput"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="dragon-selput"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className="dragon-selput"
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            required
            onChange={handleChange}
            className="dragon-selput"
          />

          <select
            name="gender"
            required
            onChange={handleChange}
            className="dragon-selput"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <button
            type="submit"
            className="dragon-button"
          >
            Register as Patient
          </button>

        </form>

        <p className="dragon-text">
          Already have an account?{" "}
          <Link to="/login" className="dragon-log">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default PatientRegister;
