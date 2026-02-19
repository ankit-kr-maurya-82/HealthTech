import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../api/axios";
import "./css/DoctorList.css";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get("search") || "");

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

  useEffect(() => {
    const urlSearch = searchParams.get("search") || "";
    if (urlSearch !== searchText) {
      setSearchText(urlSearch);
    }
  }, [searchParams, searchText]);

  const filteredDoctors = useMemo(() => {
    const term = searchText.trim().toLowerCase();
    if (!term) return doctors;

    return doctors.filter((doctor) => {
      const fullName = doctor.fullName || doctor.username || "";
      const specialty = doctor.specialty || "";
      const email = doctor.email || "";

      return [fullName, specialty, email].some((value) =>
        value.toLowerCase().includes(term)
      );
    });
  }, [doctors, searchText]);

  const handleSearchChange = (event) => {
    const nextValue = event.target.value;
    setSearchText(nextValue);

    const trimmed = nextValue.trim();
    if (trimmed) {
      setSearchParams({ search: nextValue });
      return;
    }

    setSearchParams({});
  };

  if (loading) return <h3 className="patient-doctor-list-loading">Loading doctors...</h3>;

  return (
    <section className="patient-doctor-list-page">
      <div className="patient-doctor-list-header">
        <h2>Available Doctors</h2>
        <input
          type="text"
          className="patient-doctor-list-search"
          placeholder="Search by name, specialty, or email"
          value={searchText}
          onChange={handleSearchChange}
          aria-label="Search doctors"
        />
      </div>

      {error ? <p className="patient-doctor-list-error">{error}</p> : null}

      {filteredDoctors.length === 0 ? (
        <p className="patient-doctor-list-empty">No doctors found for this search.</p>
      ) : (
        <div className="patient-doctor-list-grid">
          {filteredDoctors.map((doctor) => (
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
