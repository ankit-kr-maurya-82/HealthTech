import React, { useState } from "react";
import api from "../../api/axios";
import "./css/AddProblem.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddProblem = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    severity: "",
    date: null,
  });
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/problems", formData);
      console.log("Saved:", response.data);
      alert("Problem added successfully");
      setFormData({ title: "", description: "", severity: "", date: "" });
    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("Response:", error.response);
      if (error.response?.status === 401) {
        alert("Session expired. Please login again.");
        return;
      }
      alert(error.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className="add-problem-wrapper">
      <div className="add-problem-container">
        <h2>Add Medical Problem</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Problem Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Describe your problem..."
            value={formData.description}
            onChange={handleChange}
            required
          />
          <select
            name="severity"
            value={formData.severity}
            onChange={handleChange}
            required
          >
            <option value="">Select Severity</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <DatePicker 
            selected={formData.date}
            onChange={(date) =>
              setFormData({ ...formData, date })
            }
            placeholderText="Select date"
            dateFormat="dd-MM-yyyy"
            className="custom-date-input"
          />

          <button type="submit">Submit Problem</button>
        </form>
      </div>
    </div>
  );
};

export default AddProblem;
