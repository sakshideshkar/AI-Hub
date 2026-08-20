import React from "react";

const Select = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  error,
  required = false,
  disabled = false,
}) => {
  return (
    <div className="common-select-group">
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={error ? "has-error" : ""}
      >
        <option value="">{placeholder}</option>

        {options.map((option, index) => (
          <option
            key={option.value || index}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Select;