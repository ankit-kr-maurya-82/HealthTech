import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/DoctorLogin.css"

// import user_icon from "../../assets/user.png";
// import email_icon from "../../assets/envlope.png";
// import password_icon from "../../assets/lock.png";

const DoctorLogin = () => {
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

    console.log("Doctor Login:", data);

    // 👉 API connect later
    // axios.post("/api/auth/login", data)

    navigate("/doctor/dashboard");
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="main-form"
      >
        <h2 className="main-heading">
          Doctor Login
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
          Login as Doctor
        </button>
      </form>
    </div>
  );
};

export default DoctorLogin;
