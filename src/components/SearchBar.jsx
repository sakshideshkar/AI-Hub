import React, { useState } from "react";
import { FaSearch, FaSlidersH, FaTimes } from "react-icons/fa";

function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const search = () => {
    if (onSearch) onSearch(value);
  };

  return (
    <>
      <div className="search-wrapper">
        <FaSearch className="search-icon" />

        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && search()}
          placeholder="Search AI tools, models, categories..."
        />

        {value && (
          <button onClick={() => setValue("")}>
            <FaTimes />
          </button>
        )}

        <button className="filter-btn">
          <FaSlidersH />
        </button>
      </div>

      <style>{`
        .search-wrapper {
          width: 100%;
          max-width: 700px;
          height: 58px;
          padding: 0 10px 0 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-radius: 17px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.1);
          box-shadow: 0 15px 50px rgba(0,0,0,.15);
          transition: .3s;
        }

        .search-wrapper:focus-within {
          border-color: #7c5cff;
          box-shadow: 0 0 30px rgba(124,92,255,.15);
        }

        .search-icon {
          color: #7c5cff;
        }

        .search-wrapper input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          color: white;
          font-size: 14px;
        }

        .search-wrapper input::placeholder {
          color: #6f7890;
        }

        .search-wrapper button {
          border: 0;
          background: transparent;
          color: #8993aa;
          cursor: pointer;
        }

        .filter-btn {
          width: 40px;
          height: 40px;
          border-radius: 11px !important;
          background: rgba(124,92,255,.12) !important;
          color: #9d86ff !important;
        }
      `}</style>
    </>
  );
}

export default SearchBar;