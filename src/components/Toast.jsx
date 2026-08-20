import React from "react";
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from "react-icons/fa";
import { useApp } from "../context/AppContext";

function ToastStack() {
  const { toasts, removeToast } = useApp();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-stack">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast-item ${toast.type || "success"}`}>
          <div className="toast-icon">
            {toast.type === "error" && <FaExclamationCircle style={{ color: "#ef4444" }} />}
            {toast.type === "info" && <FaInfoCircle style={{ color: "#3b82f6" }} />}
            {(toast.type === "success" || !toast.type) && <FaCheckCircle style={{ color: "#10b981" }} />}
          </div>

          <span className="toast-message-text">{toast.message}</span>

          <button
            type="button"
            className="toast-close-btn"
            onClick={() => removeToast(toast.id)}
          >
            <FaTimes />
          </button>
        </div>
      ))}

      <style>{`
        .toast-icon {
          font-size: 18px;
          display: grid;
          place-items: center;
        }

        .toast-message-text {
          flex: 1;
          font-size: 13.5px;
          font-weight: 600;
          line-height: 1.4;
        }

        .toast-close-btn {
          color: var(--text-dim);
          cursor: pointer;
          font-size: 12px;
          padding: 4px;
          transition: 0.2s;
        }

        .toast-close-btn:hover {
          color: var(--text-main);
        }
      `}</style>
    </div>
  );
}

export default ToastStack;