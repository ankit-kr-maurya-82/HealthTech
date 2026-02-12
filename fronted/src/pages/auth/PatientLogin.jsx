import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/PatientLogin.css"

const PatientLogin = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Patient Login:", data);

    // 👉 API connect later
    // axios.post("/api/auth/login", data)

    navigate("/patient/dashboard");
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="main-form"
      >
        <h2 className="main-heading">
          Patient Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          className="main-input"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
          className="main-input"
        />

        <button className="main-button">
          Login as Patient
        </button>
      </form>
    </div>
  );
};

export default PatientLogin;
