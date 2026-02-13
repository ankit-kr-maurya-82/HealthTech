import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/DoctorRegister.css";
import api from "../../api/axios.js";
import UserContext from "../../context/UserContext";
import Button from "../../components/ui/Button.jsx";

const DoctorRegister = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "", // ✅ added
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
      if (!formData.gender) {
        throw new Error("Please select gender");
      }

      const certRegex = /^NMC[A-Za-z0-9]{3,9}$/;

      if (!certRegex.test(formData.certificateNumber)) {
        throw new Error(
          "Please enter a valid Medical Certificate Number starting with NMC."
        );
      }

      const isValidCert = await verifyCertificate(formData.certificateNumber);

      if (!isValidCert) {
        throw new Error("Certificate number not verified with NMC.");
      }

      const response = await api.post("/users/register", formData);

      console.log("FULL RESPONSE =", response.data);

      // ✅ correct save
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data.user));

      // ✅ context update
      setUser(response.data.data.user);

      // ✅ redirect
      navigate("/doctor/dashboard");
    } catch (err) {
      console.log(err);
      setError(
        err.response?.data?.message || err.message || "Registration failed"
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

          {/* ✅ Gender Added */}
          <select
            name="gender"
            required
            value={formData.gender}
            onChange={handleChange}
            className="dragon-selput"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

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

          <Button 
          type="submit" 
          text="Register on Doctor"
          disabled={loading}>
            {loading ? "Registering..." : "Register as Doctor"}
          </Button>
        </form>

        <p>
          Already have an account? <Link to="/login/doctor">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default DoctorRegister;
