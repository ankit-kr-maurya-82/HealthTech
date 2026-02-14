import React from "react";

const Advice = () => {

  // temporary dummy data (baad me API se ayega)
  const adviceList = [
    {
      id: 1,
      doctor: "Dr. Sharma",
      message: "Take rest and drink plenty of water.",
      date: "10 Feb 2026",
    },
    {
      id: 2,
      doctor: "Dr. Khan",
      message: "Avoid spicy food for one week.",
      date: "12 Feb 2026",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Doctor Advice 💬</h2>

      {adviceList.length === 0 ? (
        <p>No advice available</p>
      ) : (
        adviceList.map((advice) => (
          <div
            key={advice.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginTop: "10px",
              borderRadius: "8px",
            }}
          >
            <p><strong>Doctor:</strong> {advice.doctor}</p>
            <p><strong>Advice:</strong> {advice.message}</p>
            <p><strong>Date:</strong> {advice.date}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Advice;
