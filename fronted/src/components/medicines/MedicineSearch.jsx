import React from "react";
import { FiSearch } from "react-icons/fi";

const MedicineSearch = ({ value, onChange, placeholder }) => {
  return (
    <div className="medicine-search-wrap">
      <FiSearch className="medicine-search-icon" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="medicine-search-input"
        aria-label="Search medicines"
      />
    </div>
  );
};

export default MedicineSearch;
