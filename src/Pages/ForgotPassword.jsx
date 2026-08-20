import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRobot, FaEnvelope, FaArrowRight, FaCheckCircle, FaLock } from "react-icons/fa";
import { useApp } from "../context/AppContext";

function ForgotPassword() {
  const { showToast } = useApp();
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSent(true);
    showToast("Password reset instructions dispatched to your email! ✉️", "success");
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

        {!isSent ? (
          <>
            <div className="auth-title-section">
              <div className="auth-icon-badge">
                <FaLock />
              </div>
              <h2>Forgot Password?</h2>
              <p>Enter your account email and we'll send you a secure verification link to reset your credentials.</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form-body">
              <div className="auth-input-group">
                <label>Registered Email Address</label>
                <div className="input-box-wrapper">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary auth-submit-btn">
                Send Reset Link <FaArrowRight style={{ fontSize: "12px" }} />
              </button>
            </form>

            <p className="auth-footer-text">
              Remember your password? <Link to="/login">Back to Sign In</Link>
            </p>
          </>
        ) : (
          <div className="sent-success-box">
            <FaCheckCircle className="sent-success-icon" />
            <h2>Check Your Inbox</h2>
            <p>
              We've dispatched a recovery link to <strong>{email}</strong>. Please check your spam folder if it doesn't appear in 2 minutes.
            </p>
            <div className="sent-actions-row">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setIsSent(false)}
              >
                Try Another Email
              </button>
              <Link to="/login" className="btn-primary">
                Return to Login
              </Link>
            </div>
          </div>
        )}
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

        .auth-icon-badge {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: rgba(124, 92, 255, 0.15);
          color: var(--accent-primary);
          display: grid;
          place-items: center;
          font-size: 20px;
          margin: 0 auto 16px;
        }

        .auth-title-section h2 {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .auth-title-section p {
          color: var(--text-muted);
          font-size: 13.5px;
          line-height: 1.5;
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

        /* Success box */
        .sent-success-box {
          text-align: center;
          padding: 10px 0;
        }

        .sent-success-icon {
          font-size: 54px;
          color: #10b981;
          margin-bottom: 16px;
        }

        .sent-success-box h2 {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .sent-success-box p {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .sent-actions-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      `}</style>
    </div>
  );
}

export default ForgotPassword;