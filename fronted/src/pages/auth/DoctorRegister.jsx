import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/DoctorRegister.css";

// NMC987654 medical Certificate Number
const DoctorRegister = () => {
  const navigate = useNavigate();

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

  // Simulated certificate verification API
  const verifyCertificate = async (certificateNumber) => {
    // Here, you can replace this with a real API call to your backend or NMC API
    // For demonstration, we simulate valid certificates as starting with "NMC"
    return new Promise((resolve) => {
      setTimeout(() => {
        if (certificateNumber.startsWith("NMC")) resolve(true);
        else resolve(false);
      }, 1000); // simulate network delay
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic certificate validation (alphanumeric, 6-12 chars)
    const certRegex = /^[A-Za-z0-9]{6,12}$/;
    if (!certRegex.test(formData.certificateNumber)) {
      setError("Please enter a valid Medical Certificate Number (6-12 alphanumeric characters).");
      setLoading(false);
      return;
    }

    // Verify certificate (simulated)
    const isValidCert = await verifyCertificate(formData.certificateNumber);
    if (!isValidCert) {
      setError("Certificate number not verified with NMC. Please check your number.");
      setLoading(false);
      return;
    }

    console.log("Doctor Register Data:", formData);

    // TODO: replace with real API call
    // await axios.post("/api/auth/register", formData)

    setLoading(false);
    navigate("/doctor/dashboard");
  };
 
  return (
    <div className="doctor-register-container">
      <div className="doctor-register-card">
        <h2>Doctor Registration</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
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
            placeholder="Specialization (Cardiologist, Dentist...)"
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
