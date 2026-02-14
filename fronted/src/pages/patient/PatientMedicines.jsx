import React from "react";

const PatientMedicines = () => {

  // dummy data (API se baad me ayega)
  const medicines = [
    {
      id: 1,
      name: "Paracetamol",
      dosage: "500mg",
      time: "Morning & Night",
      doctor: "Dr. Sharma",
    },
    {
      id: 2,
      name: "Vitamin D",
      dosage: "1 Tablet",
      time: "After Lunch",
      doctor: "Dr. Khan",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Medicines 💊</h2>

      {medicines.length === 0 ? (
        <p>No medicines prescribed</p>
      ) : (
        medicines.map((med) => (
          <div
            key={med.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginTop: "10px",
              borderRadius: "8px",
            }}
          >
            <p><strong>Medicine:</strong> {med.name}</p>
            <p><strong>Dosage:</strong> {med.dosage}</p>
            <p><strong>Time:</strong> {med.time}</p>
            <p><strong>Prescribed By:</strong> {med.doctor}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default PatientMedicines;
