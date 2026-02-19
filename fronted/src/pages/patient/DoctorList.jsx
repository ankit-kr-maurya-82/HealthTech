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
    const fetchDcoctors = async () => {
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

  const clearSearch = () => {
    setSearchText("");
    setSearchParams({});
  };

  if (loading) return <h3 className="patient-doctor-list-loading">Loading doctors...</h3>;

  return (
    <section className="patient-doctor-list-page">
      <div className="patient-doctor-list-hero">
        <div>
          <h2>Find Your Doctor</h2>
          <p className="patient-doctor-list-subtitle">
            Browse specialists and filter by name, specialty, or email.
          </p>
        </div>
        <span className="patient-doctor-list-count">
          {filteredDoctors.length} result{filteredDoctors.length === 1 ? "" : "s"}
        </span>
      </div>

      <div className="patient-doctor-list-toolbar">
        <input
          type="text"
          className="patient-doctor-list-search"
          placeholder="Search by name, specialty, or email"
          value={searchText}
          onChange={handleSearchChange}
          aria-label="Search doctors"
        />
        {searchText.trim() ? (
          <button
            type="button"
            className="patient-doctor-list-clear-btn"
            onClick={clearSearch}
          >
            Clear
          </button>
        ) : null}
      </div>

      {error ? <p className="patient-doctor-list-error">{error}</p> : null}

      {filteredDoctors.length === 0 ? (
        <div className="patient-doctor-list-empty">
          <h3>No matching doctors</h3>
          <p>Try a different name, specialty, or clear your search.</p>
        </div>
      ) : (
        <div className="patient-doctor-list-grid">
          {filteredDoctors.map((doctor) => (
            <article key={doctor._id} className="patient-doctor-list-card">
              <div className="patient-doctor-list-card-head">
                <span className="patient-doctor-list-avatar">
                  {(doctor.fullName || doctor.username || "D")
                    .trim()
                    .charAt(0)
                    .toUpperCase()}
                </span>
                <div>
                  <h3>{doctor.fullName || doctor.username}</h3>
                  <span className="patient-doctor-list-specialty">
                    {doctor.specialty || "General"}
                  </span>
                </div>
              </div>

              <div className="patient-doctor-list-meta">
                <p>
                  <span>Email</span>
                  <strong>{doctor.email}</strong>
                </p>
                <p>
                  <span>Phone</span>
                  <strong>{doctor.phone || "Not provided"}</strong>
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default DoctorList;
