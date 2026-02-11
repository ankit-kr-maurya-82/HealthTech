import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DoctorRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    specialization: "",
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

    // 👉 API connect later
    // axios.post("/api/auth/register", formData)

    navigate("/login");
  };

  return (
    <div className="">
      <div className="">

        <h2 className="">
          Doctor Registration
        </h2>

        <form onSubmit={handleSubmit} className="">

          <input
            type="text"
            name="name"
            placeholder="Doctor Name"
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
            type="text"
            name="specialization"
            placeholder="Specialization (e.g. Cardiologist)"
            required
            onChange={handleChange}
            className=""
          />

          <button
            type="submit"
            className=""
          >
            Register as Doctor
          </button>
        </form>

        <p className="">
          Already registered?{" "}
          <Link to="/login" className="">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default DoctorRegister;
