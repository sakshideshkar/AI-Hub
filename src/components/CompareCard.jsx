import React from "react";
import { FaCheck, FaTimes, FaBalanceScale } from "react-icons/fa";

function CompareCard({
  tool1 = "ChatGPT",
  tool2 = "Gemini",
  features = [
    ["AI Chat", true, true],
    ["Image Generation", true, true],
    ["Coding", true, true],
    ["Free Plan", true, true],
  ],
}) {
  return (
    <>
      <div className="compare-card">
        <div className="compare-header">
          <FaBalanceScale />
          <h3>Tool Comparison</h3>
        </div>

        <div className="compare-tools">
          <div>🤖 <strong>{tool1}</strong></div>
          <span>VS</span>
          <div>✨ <strong>{tool2}</strong></div>
        </div>

        <div className="features">
          {features.map(([feature, one, two]) => (
            <div className="feature-row" key={feature}>
              <span>{feature}</span>
              <b>{one ? <FaCheck /> : <FaTimes />}</b>
              <b>{two ? <FaCheck /> : <FaTimes />}</b>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .compare-card {
          padding: 25px;
          border-radius: 22px;
          background: #10172a;
          border: 1px solid rgba(255,255,255,.08);
          color: white;
        }

        .compare-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .compare-header svg {
          color: #7c5cff;
        }

        .compare-header h3 {
          margin: 0;
        }

        .compare-tools {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 15px;
          text-align: center;
          margin: 25px 0;
        }

        .compare-tools div {
          padding: 16px;
          border-radius: 13px;
          background: rgba(255,255,255,.05);
        }

        .compare-tools span {
          color: #7c5cff;
          font-weight: bold;
        }

        .features {
          border-top: 1px solid rgba(255,255,255,.08);
        }

        .feature-row {
          display: grid;
          grid-template-columns: 1fr 60px 60px;
          padding: 12px 5px;
          border-bottom: 1px solid rgba(255,255,255,.05);
          font-size: 12px;
          color: #929cb2;
          text-align: center;
        }

        .feature-row span {
          text-align: left;
        }

        .feature-row svg {
          color: #32d583;
        }
      `}</style>
    </>
  );
}

export default CompareCard;