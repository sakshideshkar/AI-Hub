import React from "react";

const Input = ({
  label,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  error,
  icon,
  disabled = false,
  required = false,
}) => {
  return (
    <div className="common-input-group">
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}

      <div className={`input-wrapper ${error ? "has-error" : ""}`}>
        {icon && <span className="input-icon">{icon}</span>}

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          required={required}
        />
      </div>

      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Input;