import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/DoctorRegister.css";
import api from "../../api/axios.js";
import UserContext from "../../context/UserContext";

const DoctorRegister = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    specialization: "",
    certificateNumber: "",
    role: "doctor",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fake certificate verification
  const verifyCertificate = async (certificateNumber) => {
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

    try {
      // ✅ certificate validation
      const certRegex = /^NMC[A-Za-z0-9]{3,9}$/;
      if (!certRegex.test(formData.certificateNumber)) {
        throw new Error(
          "Please enter a valid Medical Certificate Number starting with 'NMC'."
        );
      }

      const isValidCert = await verifyCertificate(
        formData.certificateNumber
      );
      if (!isValidCert) {
        throw new Error("Certificate number not verified with NMC.");
      }

      // ✅ create FormData (multer compatible)
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      // ✅ API CALL
      const response = await api.post(
        "/users/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Doctor saved in DB:", response.data);

      // ✅ save user in context
      setUser(response.data.data);

      navigate("/doctor/dashboard");

    } catch (err) {
      console.log(err);
      setError(
        err.response?.data?.message ||
          err.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="doctor-register-container">
      <div className="doctor-register-card">
        <h2>Doctor Registration</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Full Name"
            required
            value={formData.username}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
          />

          <input
            type="text"
            name="specialization"
            placeholder="Specialization"
            required
            value={formData.specialization}
            onChange={handleChange}
          />

          <input
            type="text"
            name="certificateNumber"
            placeholder="Medical Certificate Number"
            required
            value={formData.certificateNumber}
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register as Doctor"}
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
