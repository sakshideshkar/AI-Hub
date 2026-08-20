import React from "react";
import { FaStar, FaCheck } from "react-icons/fa";

function FilterSidebar() {
  return (
    <>
      <aside className="filter-sidebar">
        <div className="filter-title">
          <h3>Filters</h3>
          <button>Reset</button>
        </div>

        <section>
          <label>Category</label>

          {["AI Assistant", "Image Generator", "Writing", "Coding", "Video"].map(
            item => (
              <div className="check-item" key={item}>
                <input type="checkbox" />
                <span>{item}</span>
              </div>
            )
          )}
        </section>

        <section>
          <label>Rating</label>

          {[5, 4, 3].map(star => (
            <div className="rating-filter" key={star}>
              <input type="checkbox" />
              <span>
                {[...Array(star)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </span>
              <small>& up</small>
            </div>
          ))}
        </section>

        <section>
          <label>Pricing</label>
          {["Free", "Freemium", "Paid"].map(item => (
            <div className="check-item" key={item}>
              <input type="checkbox" />
              <span>{item}</span>
            </div>
          ))}
        </section>
      </aside>

      <style>{`
        .filter-sidebar {
          width: 240px;
          padding: 22px;
          border-radius: 18px;
          background: #0d1324;
          border: 1px solid rgba(255,255,255,.08);
          color: #9aa4bb;
        }

        .filter-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .filter-title h3 {
          color: white;
          margin: 0;
        }

        .filter-title button {
          border: 0;
          background: transparent;
          color: #7c5cff;
          cursor: pointer;
        }

        .filter-sidebar section {
          margin-top: 28px;
        }

        .filter-sidebar label {
          display: block;
          color: white;
          font-size: 13px;
          margin-bottom: 14px;
        }

        .check-item,
        .rating-filter {
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 12px 0;
          font-size: 12px;
        }

        .check-item input,
        .rating-filter input {
          accent-color: #7c5cff;
        }

        .rating-filter svg {
          color: #ffc107;
          font-size: 11px;
        }

        .rating-filter small {
          color: #69748b;
        }
      `}</style>
    </>
  );
}

export default FilterSidebar;