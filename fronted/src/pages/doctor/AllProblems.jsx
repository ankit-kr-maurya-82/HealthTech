import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const AllProblems = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const patientId = searchParams.get("patient"); // optional filter

  useEffect(() => {
    fetchProblems();
  }, [patientId]);

  const fetchProblems = async () => {
    try {
      const url = patientId
        ? `http://localhost:8000/api/problems?patient=${patientId}`
        : "http://localhost:8000/api/problems";
      const res = await axios.get(url, { withCredentials: true });
      setProblems(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h3>Loading problems...</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Problems {patientId && `(Patient ID: ${patientId})`}</h2>
      {problems.length === 0 ? (
        <p>No problems found.</p>
      ) : (
        problems.map((p) => (
          <div
            key={p._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginTop: "15px",
              borderRadius: "8px",
              background: "#f9f9f9",
            }}
          >
            <p><strong>Title:</strong> {p.title}</p>
            <p><strong>Description:</strong> {p.description}</p>
            <p><strong>Status:</strong> {p.status}</p>
            <small>Submitted on: {new Date(p.createdAt).toLocaleDateString()}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default AllProblems;
