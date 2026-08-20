import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Rating({ value = 0, onChange }) {
  const [rating, setRating] = useState(value);

  const select = number => {
    setRating(number);
    onChange && onChange(number);
  };

  return (
    <>
      <div className="rating">
        {[1, 2, 3, 4, 5].map(number => (
          <button
            key={number}
            className={number <= rating ? "active" : ""}
            onClick={() => select(number)}
          >
            <FaStar />
          </button>
        ))}
      </div>

      <style>{`
        .rating {
          display: flex;
          gap: 4px;
        }

        .rating button {
          border: 0;
          background: transparent;
          color: #424b61;
          cursor: pointer;
          font-size: 20px;
          transition: .2s;
        }

        .rating button:hover,
        .rating button.active {
          color: #ffc107;
          transform: scale(1.15);
        }
      `}</style>
    </>
  );
}

export default Rating;