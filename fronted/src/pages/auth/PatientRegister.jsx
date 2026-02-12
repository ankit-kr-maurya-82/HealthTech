import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/PatientRegister.css"

const PatientRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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
    <div className="">
      <div className="">

        <h2 className="">
          Patient Registration
        </h2>

        <form onSubmit={handleSubmit} className="">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className=""
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className=""
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className=""
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            required
            onChange={handleChange}
            className=""
          />

          <select
            name="gender"
            required
            onChange={handleChange}
            className=""
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <button
            type="submit"
            className=""
          >
            Register as Patient
          </button>

        </form>

        <p className="">
          Already have an account?{" "}
          <Link to="/login" className="">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default PatientRegister;
