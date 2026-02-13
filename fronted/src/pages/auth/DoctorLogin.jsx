import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/DoctorLogin.css";
// NMC987654 medical Certificate Number

const DoctorLogin = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
    certificateNumber: "", // add certificate number field
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Simulated certificate verification
  const verifyCertificate = async (certificateNumber) => {
    // Replace with backend API / NMC API call
    return new Promise((resolve) => {
      setTimeout(() => {
        if (certificateNumber.startsWith("NMC")) resolve(true);
        else resolve(false);
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!data.email || !data.password || !data.certificateNumber) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    // Verify certificate
    const isValidCert = await verifyCertificate(data.certificateNumber);
    if (!isValidCert) {
      setError("Certificate number not verified with NMC. Login denied.");
      setLoading(false);
      return;
    }

    // TODO: Call backend to check email/password
    console.log("Doctor Login Data:", data);

    setTimeout(() => {
      setLoading(false);
      navigate("/doctor/dashboard");
    }, 1000); // simulate backend delay
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="main-form">
        <h2 className="main-heading">Doctor Login</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={data.email}
          onChange={handleChange}
          className="main-input"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={data.password}
          onChange={handleChange}
          className="main-input"
        />

        <input
          type="text"
          name="certificateNumber"
          placeholder="Medical Certificate Number"
          required
          value={data.certificateNumber}
          onChange={handleChange}
          className="main-input"
        />

        <button className="main-button" disabled={loading}>
          {loading ? "Logging in..." : "Login as Doctor"}
        </button>

        <p className="login-text">
          Don't have an account? <Link to="/register/doctor">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default DoctorLogin;
