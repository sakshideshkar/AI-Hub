import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const Dropdown = ({
  label = "Options",
  items = [],
  onSelect,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (item) => {
    onSelect?.(item);
    setOpen(false);
  };

  return (
    <div className="common-dropdown" ref={dropdownRef}>
      <button
        className="dropdown-button"
        onClick={() => setOpen(!open)}
      >
        {label}
        <FaChevronDown
          className={open ? "rotate-arrow" : ""}
        />
      </button>

      {open && (
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <button
              key={item.id || index}
              className="dropdown-item"
              onClick={() => handleSelect(item)}
            >
              {item.icon && (
                <span className="dropdown-item-icon">
                  {item.icon}
                </span>
              )}

              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;