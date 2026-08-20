import React from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search AI tools...",
  onClear,
}) => {
  return (
    <div className="common-search">
      <FaSearch className="search-icon" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />

      {value && (
        <button
          className="search-clear"
          onClick={onClear}
          type="button"
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default SearchBar;