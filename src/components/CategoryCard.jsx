import React from "react";
import { FaArrowRight } from "react-icons/fa";

function CategoryCard({
  icon = "🤖",
  title = "AI Assistants",
  count = 120,
  description = "Smart conversational AI tools",
}) {
  return (
    <>
      <div className="category-card">
        <div className="category-icon">{icon}</div>

        <div className="category-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <span>{count}+ Tools</span>
        </div>

        <FaArrowRight className="category-arrow" />
      </div>

      <style>{`
        .category-card {
          padding: 22px;
          border-radius: 20px;
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,255,255,.08);
          display: flex;
          align-items: center;
          gap: 16px;
          color: white;
          cursor: pointer;
          transition: .3s;
        }

        .category-card:hover {
          transform: translateY(-5px);
          background: rgba(124,92,255,.1);
          border-color: #7c5cff;
        }

        .category-icon {
          width: 55px;
          height: 55px;
          border-radius: 15px;
          display: grid;
          place-items: center;
          background: rgba(124,92,255,.13);
          font-size: 27px;
        }

        .category-content {
          flex: 1;
        }

        .category-content h3 {
          margin: 0;
          font-size: 16px;
        }

        .category-content p {
          margin: 6px 0;
          color: #808ba2;
          font-size: 12px;
        }

        .category-content span {
          font-size: 11px;
          color: #7c5cff;
        }

        .category-arrow {
          color: #626c83;
        }
      `}</style>
    </>
  );
}

export default CategoryCard;