import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import "./css/DoctorList.css";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const res = await api.get("/doctors");
        setDoctors(res.data?.data?.doctors || []);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load doctors");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) return <h3 className="patient-doctor-list-loading">Loading doctors...</h3>;

  return (
    <section className="patient-doctor-list-page">
      <h2>Available Doctors</h2>
      {error ? <p className="patient-doctor-list-error">{error}</p> : null}

      {doctors.length === 0 ? (
        <p className="patient-doctor-list-empty">No doctors found.</p>
      ) : (
        <div className="patient-doctor-list-grid">
          {doctors.map((doctor) => (
            <article key={doctor._id} className="patient-doctor-list-card">
              <p>
                <strong>Name:</strong> {doctor.fullName || doctor.username}
              </p>
              <p>
                <strong>Email:</strong> {doctor.email}
              </p>
              <p>
                <strong>Specialty:</strong> {doctor.specialty || "General"}
              </p>
              <p>
                <strong>Phone:</strong> {doctor.phone || "Not provided"}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default DoctorList;
