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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/users/register", formData);

      console.log("Patient Saved:", response.data);

      navigate("/patient/dashboard");
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Registration failed");
    }
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
