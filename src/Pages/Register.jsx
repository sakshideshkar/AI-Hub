import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRobot, FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowRight, FaBolt, FaCheck } from "react-icons/fa";
import { useApp } from "../context/AppContext";

function Register() {
  const navigate = useNavigate();
  const { login, loginAsDemo, showToast } = useApp();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    agreeTerms: true,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      showToast("Please fill in all registration fields.", "error");
      return;
    }
    login(form.email, form.name);
    showToast("🎉 Account created successfully! Welcome to AIHUB.", "success");
    navigate("/dashboard");
  };

  const handleQuickDemo = () => {
    loginAsDemo();
    navigate("/dashboard");
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-glow-blob blob-left"></div>
      <div className="auth-glow-blob blob-right"></div>

      <div className="auth-card-container glass-card">
        {/* Brand */}
        <Link to="/" className="auth-brand-head">
          <div className="brand-icon-box">
            <FaRobot />
          </div>
          <span>AI<span className="gradient-text">HUB</span></span>
        </Link>

        <div className="auth-title-section">
          <h2>Create Your Account 🚀</h2>
          <p>Join over 800,000+ engineers, researchers, and AI creators.</p>
        </div>

        {/* 1-Click Demo Button */}
        <button
          type="button"
          className="btn-primary quick-demo-btn"
          onClick={handleQuickDemo}
        >
          <FaBolt className="bolt-pulse" /> 1-Click Instant Demo Access
        </button>

        <div className="auth-divider">
          <span>OR REGISTER WITH EMAIL</span>
        </div>

        <form onSubmit={handleSubmit} className="auth-form-body">
          <div className="auth-input-group">
            <label>Full Name</label>
            <div className="input-box-wrapper">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="e.g. Sakshi Patel"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label>Work or Personal Email</label>
            <div className="input-box-wrapper">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label>Create Password</label>
            <div className="input-box-wrapper">
              <FaLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Minimum 6 characters"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                minLength={6}
              />
              <button
                type="button"
                className="eye-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <label className="terms-checkbox-label">
            <input
              type="checkbox"
              checked={form.agreeTerms}
              onChange={(e) => setForm({ ...form, agreeTerms: e.target.checked })}
              required
            />
            <span>
              I agree to the AIHUB Terms of Service & Privacy Policy
            </span>
          </label>

          <button type="submit" className="btn-primary auth-submit-btn">
            Create Account & Explore <FaArrowRight style={{ fontSize: "12px" }} />
          </button>
        </form>

        <p className="auth-footer-text">
          Already have an account? <Link to="/login">Sign in instead</Link>
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

        .blob-left {
          background: #7c5cff;
          top: -100px;
          left: -100px;
        }

        .blob-right {
          background: #ec4899;
          bottom: -100px;
          right: -100px;
        }

        .auth-card-container {
          width: 100%;
          max-width: 480px;
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

        .quick-demo-btn {
          width: 100%;
          padding: 13px !important;
          border-radius: var(--radius-md) !important;
          background: var(--accent-gradient-alt) !important;
          font-size: 14px !important;
          margin-bottom: 20px;
        }

        .bolt-pulse {
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .auth-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-dim);
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.8px;
          margin-bottom: 20px;
        }

        .auth-divider::before,
        .auth-divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: var(--border-color);
        }

        .auth-form-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 20px;
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

        .terms-checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          color: var(--text-dim);
          cursor: pointer;
          margin: 4px 0;
        }

        .terms-checkbox-label input {
          accent-color: var(--accent-primary);
          margin-top: 2px;
        }

        .auth-submit-btn {
          width: 100%;
          padding: 13px !important;
          border-radius: var(--radius-md) !important;
          margin-top: 6px;
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

export default Register;