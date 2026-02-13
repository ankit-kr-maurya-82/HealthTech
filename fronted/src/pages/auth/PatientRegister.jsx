import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import UserContext from "../../context/UserContext";
import "./css/PatientRegister.css";
import Button from "../../components/ui/Button";

const PatientRegister = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    role: "patient",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.post("/users/register", formData);

      const userData = response.data.data; // assuming ApiResponse wraps user in data
      const token = response.data.data?.accessToken || response.data.token;

      // ✅ save in context & localStorage
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", token);

      navigate("/patient/dashboard");
    } catch (err) {
      console.log(err.response?.data);
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dragon-main">
      <div className="dragon-card">
        <h2 className="dragon-h2">Patient Registration</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit} className="dragon-form">
          <input
            type="text"
            name="username"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="dragon-selput"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="dragon-selput"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className="dragon-selput"
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            required
            onChange={handleChange}
            className="dragon-selput"
          />

          <select
            name="gender"
            required
            onChange={handleChange}
            className="dragon-selput"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <Button
            text={loading ? "Registering..." : "Register as Patient"}
            type="submit"
            className="dragon-button"
            disabled={loading}
          />
        </form>

        <p className="dragon-text">
          Already have an account?{" "}
          <Link to="/login/patient" className="dragon-log">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PatientRegister;
