import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="">
      <form
        onSubmit={handleSubmit}
        className=""
      >
        <h2 className="">
          Doctor Login
        </h2>

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

        <button className="">
          Login as Doctor
        </button>
      </form>
    </div>
  );
};

export default DoctorLogin;
