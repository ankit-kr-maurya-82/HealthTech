import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import api from "../../api/axios";
import "./css/EditProfileModal.css";

const EditProfileModal = ({ onClose }) => {
  const { user, setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    gender: user?.gender || "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const res = await api.put("/users/update-profile", formData);

    console.log("Response:", res.data);

    // ✅ Correct access
    const updatedUser = res.data.data.user;

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));

    alert("Profile updated successfully ✅");
    onClose();

  } catch (error) {
    console.error(error);
    alert("Update failed ❌");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Edit Profile</h2>

        <form onSubmit={handleSubmit}>

          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <div className="modal-buttons">
            <button type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update"}
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
