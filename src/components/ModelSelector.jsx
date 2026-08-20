import React, { useState } from "react";
import { FaChevronDown, FaRobot } from "react-icons/fa";

function ModelSelector({ models = ["GPT-5.6", "Gemini", "Claude", "Copilot"] }) {
  const [selected, setSelected] = useState(models[0]);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="model-selector">
        <button className="model-button" onClick={() => setOpen(!open)}>
          <FaRobot />
          <span>{selected}</span>
          <FaChevronDown />
        </button>

        {open && (
          <div className="model-dropdown">
            {models.map(model => (
              <button
                key={model}
                onClick={() => {
                  setSelected(model);
                  setOpen(false);
                }}
              >
                <FaRobot />
                {model}
              </button>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .model-selector {
          position: relative;
        }

        .model-button {
          min-width: 170px;
          height: 44px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.06);
          color: white;
          padding: 0 13px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }

        .model-button svg:first-child {
          color: #7c5cff;
        }

        .model-button svg:last-child {
          margin-left: auto;
          font-size: 10px;
        }

        .model-dropdown {
          position: absolute;
          top: 50px;
          left: 0;
          width: 100%;
          padding: 7px;
          background: #11182b;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 14px;
          z-index: 20;
        }

        .model-dropdown button {
          width: 100%;
          border: 0;
          background: transparent;
          color: #aab3c8;
          padding: 11px;
          text-align: left;
          cursor: pointer;
          border-radius: 9px;
        }

        .model-dropdown button:hover {
          background: rgba(124,92,255,.15);
          color: white;
        }

        .model-dropdown svg {
          margin-right: 8px;
          color: #7c5cff;
        }
      `}</style>
    </>
  );
}

export default ModelSelector;