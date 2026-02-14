import React, { useState } from "react";

const AddProblem = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    severity: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Problem Submitted:", formData);

    // later → API call yaha karega
    // await api.post("/problems", formData)

    alert("Problem Added Successfully 👍");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <h2>Add Medical Problem 🩺</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Problem Title"
          value={formData.title}
          onChange={handleChange}
          required
          style={{ width: "100%", marginTop: "10px", padding: "8px" }}
        />

        <textarea
          name="description"
          placeholder="Describe your problem..."
          value={formData.description}
          onChange={handleChange}
          required
          style={{ width: "100%", marginTop: "10px", padding: "8px" }}
        />

        <select
          name="severity"
          value={formData.severity}
          onChange={handleChange}
          required
          style={{ width: "100%", marginTop: "10px", padding: "8px" }}
        >
          <option value="">Select Severity</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          style={{ width: "100%", marginTop: "10px", padding: "8px" }}
        />

        <button
          type="submit"
          style={{ marginTop: "15px", padding: "10px 15px" }}
        >
          Submit Problem
        </button>

      </form>
    </div>
  );
};

export default AddProblem;
