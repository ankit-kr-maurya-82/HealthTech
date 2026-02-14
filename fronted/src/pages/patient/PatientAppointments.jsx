import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

const PatientAppointments = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h2>Please login first</h2>;

  // temporary dummy data (API se baad me ayega)
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sharma",
      date: "20 Feb 2026",
      time: "10:30 AM",
      status: "Upcoming",
    },
    {
      id: 2,
      doctor: "Dr. Khan",
      date: "25 Feb 2026",
      time: "2:00 PM",
      status: "Confirmed",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Appointments 📅</h2>

      {appointments.length === 0 ? (
        <p>No appointments found</p>
      ) : (
        appointments.map((appt) => (
          <div
            key={appt.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginTop: "10px",
              borderRadius: "8px",
            }}
          >
            <p><strong>Doctor:</strong> {appt.doctor}</p>
            <p><strong>Date:</strong> {appt.date}</p>
            <p><strong>Time:</strong> {appt.time}</p>
            <p><strong>Status:</strong> {appt.status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default PatientAppointments;
