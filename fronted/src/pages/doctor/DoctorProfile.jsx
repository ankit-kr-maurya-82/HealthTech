import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../context/UserContext";
import "./css/DoctorProfile.css";

const DoctorProfile = () => {
  const { user } = useContext(UserContext); // get logged-in user info
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDoctorProfile = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8000/api/doctors/${user?._id}`,
          { withCredentials: true } // important if you use cookies/session
        );
        setDoctor(response.data);
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || "Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    if (user?._id) fetchDoctorProfile();
  }, [user]);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!doctor) return <p>No doctor data found.</p>;

  return (
    <div className="doctor-profile-container">
      <div className="doctor-card">
        <img
          src={doctor.avatar || "https://i.pravatar.cc/150?img=32"}
          alt={doctor.name}
          className="doctor-avatar"
        />
        <h2>{doctor.name}</h2>
        <p className="specialty">{doctor.specialty}</p>
        <p>Email: {doctor.email}</p>
        <p>Phone: {doctor.phone}</p>
      </div>
    </div>
  );
};

export default DoctorProfile;
