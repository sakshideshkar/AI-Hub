import React from "react";
import { FaRobot } from "react-icons/fa";

function Loader({ text = "Loading AIHUB..." }) {
  return (
    <>
      <div className="loader-container">
        <div className="loader-logo">
          <FaRobot />
        </div>

        <div className="loader-ring"></div>

        <p>{text}</p>
      </div>

      <style>{`
        .loader-container {
          min-height: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #7f8aa1;
        }

        .loader-logo {
          width: 55px;
          height: 55px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg,#7c5cff,#00cfff);
          color: white;
          font-size: 24px;
          animation: float 1.5s infinite ease-in-out;
          z-index: 2;
        }

        .loader-ring {
          position: absolute;
          width: 75px;
          height: 75px;
          border: 2px solid rgba(124,92,255,.2);
          border-top-color: #7c5cff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .loader-container p {
          margin-top: 25px;
          font-size: 12px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes float {
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
}

export default Loader;