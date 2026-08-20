import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRobot, FaLock, FaArrowRight, FaCheckCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useApp } from "../context/AppContext";

function ResetPassword() {
  const navigate = useNavigate();
  const { showToast } = useApp();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      showToast("Password must be at least 6 characters.", "error");
      return;
    }
    if (newPassword !== confirmPassword) {
      showToast("Passwords do not match.", "error");
      return;
    }
    showToast("Password updated successfully! Redirecting to login...", "success");
    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-glow-blob blob-left"></div>
      <div className="auth-glow-blob blob-right"></div>

      <div className="auth-card-container glass-card">
        <Link to="/" className="auth-brand-head">
          <div className="brand-icon-box">
            <FaRobot />
          </div>
          <span>AI<span className="gradient-text">HUB</span></span>
        </Link>

        <div className="auth-title-section">
          <h2>Create New Password 🔒</h2>
          <p>Your new password must be at least 6 characters long.</p>
        </div>

        <form onSubmit={handleReset} className="auth-form-body">
          <div className="auth-input-group">
            <label>New Password</label>
            <div className="input-box-wrapper">
              <FaLock className="input-icon" />
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={6}
              />
              <button
                type="button"
                className="eye-toggle-btn"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="auth-input-group">
            <label>Confirm New Password</label>
            <div className="input-box-wrapper">
              <FaLock className="input-icon" />
              <input
                type={showPass ? "text" : "password"}
                placeholder="Re-enter new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
          </div>

          <button type="submit" className="btn-primary auth-submit-btn">
            Update Password & Sign In <FaArrowRight style={{ fontSize: "12px" }} />
          </button>
        </form>

        <p className="auth-footer-text">
          <Link to="/login">← Back to Sign In</Link>
        </p>
      </div>

      <style>{`
        .auth-page-wrapper {
          min-height: 100vh;
          background: var(--bg-main);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          position: relative;
          overflow: hidden;
        }

        .auth-glow-blob {
          position: absolute;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          filter: blur(140px);
          opacity: 0.2;
          pointer-events: none;
        }

        .blob-left { background: #7c5cff; top: -100px; left: -100px; }
        .blob-right { background: #00d4ff; bottom: -100px; right: -100px; }

        .auth-card-container {
          width: 100%;
          max-width: 460px;
          padding: 40px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-highlight);
          position: relative;
          z-index: 2;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
        }

        .auth-brand-head {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          font-size: 22px;
          font-weight: 900;
          color: var(--text-main);
          margin-bottom: 24px;
        }

        .auth-brand-head .brand-icon-box {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: var(--accent-gradient);
          color: white;
          display: grid;
          place-items: center;
          font-size: 18px;
        }

        .auth-title-section {
          text-align: center;
          margin-bottom: 24px;
        }

        .auth-title-section h2 {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .auth-title-section p {
          color: var(--text-muted);
          font-size: 13.5px;
        }

        .auth-form-body {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 24px;
        }

        .auth-input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .auth-input-group label {
          font-size: 12.5px;
          font-weight: 700;
          color: var(--text-muted);
        }

        .input-box-wrapper {
          display: flex;
          align-items: center;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 0 14px;
          height: 46px;
        }

        .input-box-wrapper:focus-within {
          border-color: var(--accent-primary);
        }

        .input-icon {
          color: var(--text-dim);
          margin-right: 10px;
          font-size: 14px;
        }

        .input-box-wrapper input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-main);
          font-size: 13.5px;
        }

        .eye-toggle-btn {
          color: var(--text-dim);
          cursor: pointer;
        }

        .auth-submit-btn {
          width: 100%;
          padding: 13px !important;
          border-radius: var(--radius-md) !important;
        }

        .auth-footer-text {
          text-align: center;
          font-size: 13px;
          color: var(--text-dim);
          margin: 0;
        }

        .auth-footer-text a {
          color: var(--accent-primary);
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}

export default ResetPassword;