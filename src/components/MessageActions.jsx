import React from "react";
import {
  FaCopy,
  FaThumbsUp,
  FaThumbsDown,
  FaRedo,
} from "react-icons/fa";

function MessageActions() {
  const copyMessage = () => {
    navigator.clipboard.writeText("AI generated response");
  };

  return (
    <>
      <div className="message-actions">
        <button onClick={copyMessage}><FaCopy /></button>
        <button><FaThumbsUp /></button>
        <button><FaThumbsDown /></button>
        <button><FaRedo /></button>
      </div>

      <style>{`
        .message-actions {
          display: flex;
          gap: 5px;
          margin-top: 8px;
        }

        .message-actions button {
          width: 28px;
          height: 28px;
          border: 0;
          border-radius: 7px;
          background: transparent;
          color: #69748b;
          cursor: pointer;
        }

        .message-actions button:hover {
          color: white;
          background: rgba(255,255,255,.07);
        }
      `}</style>
    </>
  );
}

export default MessageActions;