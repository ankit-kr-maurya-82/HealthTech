import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DoctorRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    specialization: "",
    certificateNumber: "",
    role: "doctor",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Doctor Register Data:", formData);

    // 👉 later API connect
    // axios.post("/api/auth/register", formData)

    navigate("/doctor/dashboard");
  };

  return (
    <div className="doctor-register-container">
      <div className="doctor-register-card">
        <h2>Doctor Registration</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="specialization"
            placeholder="Specialization (Cardiologist, Dentist...)"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="certificateNumber"
            placeholder="Medical Certificate Number"
            required
            onChange={handleChange}
          />

          <button type="submit">
            Register as Doctor
          </button>
        </form>

        <p>
          Already have an account?{" "}
          <Link to="/login/doctor">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default DoctorRegister;
