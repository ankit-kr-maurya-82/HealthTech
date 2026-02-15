import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // for navigation

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/users/patients",
        { withCredentials: true }
      );

      setPatients(res.data.data);
    } catch (error) {
      console.log("Fetch Error:", error);
      alert("Failed to load patients");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h3>Loading patients...</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Patients 👥</h2>

      {patients.length === 0 ? (
        <p>No patients found.</p>
      ) : (
        patients.map((patient) => (
          <div
            key={patient._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginTop: "15px",
              borderRadius: "8px",
              background: "#f0f8ff",
            }}
          >
            <p>
              <strong>Name:</strong> {patient.username}
            </p>

            <p>
              <strong>Email:</strong> {patient.email}
            </p>

            <p>
              <strong>Registered on:</strong>{" "}
              {new Date(patient.createdAt).toLocaleDateString()}
            </p>

            <button
              style={{
                marginTop: "10px",
                padding: "6px 12px",
                cursor: "pointer",
              }}
              onClick={() =>
                navigate(`/doctor/problems?patient=${patient._id}`)
              }
            >
              View Problems
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default PatientList;
