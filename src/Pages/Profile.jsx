import React, { useState } from "react";
import { FaUser, FaCheck, FaSave, FaCog, FaHeart, FaHistory, FaKey, FaShieldAlt } from "react-icons/fa";
import { useApp } from "../context/AppContext";

function Profile() {
  const { user, updateProfile, favorites, recentActivity, theme, toggleTheme, showToast } = useApp();

  const [formData, setFormData] = useState({
    name: user.name || "Sakshi Patel",
    email: user.email || "sakshi@aihub.dev",
    bio: user.bio || "AI researcher & full-stack developer exploring future frontier models.",
    avatar: user.avatar || "👩‍💻",
    role: "Full-Stack AI Developer",
  });

  const [savedSuccess, setSavedSuccess] = useState(false);
  const [apiKeyMock, setApiKeyMock] = useState("sk-aihub-demo-992384729184");

  const avatarOptions = ["👩‍💻", "👨‍💻", "🤖", "🚀", "🧠", "✨", "⚡", "🎨"];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateProfile({
      name: formData.name,
      email: formData.email,
      bio: formData.bio,
      avatar: formData.avatar,
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKeyMock);
    showToast("API Key copied to clipboard! 🔑", "info");
  };

  return (
    <div className="profile-page-container">
      {/* Profile Header Card */}
      <div className="profile-hero-card glass-card">
        <div className="profile-avatar-large">
          <span>{formData.avatar}</span>
        </div>

        <div className="profile-hero-info">
          <div className="name-badge-row">
            <h1>{formData.name}</h1>
            <span className="badge-glow"><FaShieldAlt /> {user.plan || "AIHUB Pro"}</span>
          </div>
          <p className="profile-email-text">{formData.email}</p>
          <p className="profile-bio-quote">"{formData.bio}"</p>
        </div>

        {/* Stats Row */}
        <div className="profile-stats-summary">
          <div className="stat-pill">
            <strong>{favorites.length}</strong>
            <small>Favorites Saved</small>
          </div>
          <div className="stat-pill">
            <strong>32</strong>
            <small>Models Catalog</small>
          </div>
          <div className="stat-pill">
            <strong>{recentActivity.length}</strong>
            <small>Activities</small>
          </div>
        </div>
      </div>

      <div className="profile-settings-grid">
        {/* Left Column: Edit Profile Form */}
        <div className="profile-card glass-card">
          <div className="card-section-title">
            <FaUser className="section-icon" />
            <h3>Personal Information</h3>
          </div>

          <form onSubmit={handleFormSubmit} className="profile-edit-form">
            {/* Avatar Selector */}
            <div className="form-group-field">
              <label>Choose Avatar Icon</label>
              <div className="avatar-selection-row">
                {avatarOptions.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    className={`avatar-option-btn ${formData.avatar === emoji ? "active" : ""}`}
                    onClick={() => setFormData({ ...formData, avatar: emoji })}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group-field">
              <label>Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group-field">
              <label>Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group-field">
              <label>Professional Bio</label>
              <textarea
                rows="3"
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-primary save-profile-btn">
              <FaSave /> Save Profile Changes
            </button>

            {savedSuccess && (
              <div className="save-success-alert">
                <FaCheck /> Profile changes saved successfully!
              </div>
            )}
          </form>
        </div>

        {/* Right Column: Platform Preferences & API Mock */}
        <div className="profile-card glass-card">
          <div className="card-section-title">
            <FaCog className="section-icon" />
            <h3>Preferences & Integrations</h3>
          </div>

          <div className="preferences-list">
            {/* Theme Toggle */}
            <div className="pref-item">
              <div>
                <strong>Interface Appearance</strong>
                <small>Currently using {theme === "dark" ? "Dark Cyber" : "Clean Light"} theme</small>
              </div>
              <button type="button" className="btn-secondary" onClick={toggleTheme}>
                Switch to {theme === "dark" ? "Light" : "Dark"}
              </button>
            </div>

            {/* API Key Mock */}
            <div className="pref-item api-item">
              <div>
                <strong className="api-key-label"><FaKey /> AIHUB API Access Token</strong>
                <small>Use this token for programmatic model benchmark access</small>
                <div className="api-key-display">
                  <code>{apiKeyMock}</code>
                  <button type="button" className="btn-secondary copy-key-btn" onClick={copyApiKey}>
                    Copy
                  </button>
                </div>
              </div>
            </div>

            {/* Notification Toggles */}
            <div className="pref-item">
              <div>
                <strong>Weekly Model Release Radar</strong>
                <small>Receive summaries of newly launched frontier LLMs</small>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="pref-item">
              <div>
                <strong>Benchmark Price Drop Alerts</strong>
                <small>Get notified when API token prices drop across providers</small>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .profile-page-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .profile-hero-card {
          padding: 36px 40px;
          border-radius: var(--radius-xl);
          background: linear-gradient(135deg, var(--bg-surface) 0%, rgba(124, 92, 255, 0.08) 100%);
          border: 1px solid var(--border-highlight);
          display: flex;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .profile-avatar-large {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          background: var(--accent-gradient);
          display: grid;
          place-items: center;
          font-size: 48px;
          box-shadow: 0 10px 25px rgba(124, 92, 255, 0.4);
        }

        .profile-hero-info {
          flex: 1;
          min-width: 280px;
        }

        .name-badge-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 4px;
        }

        .name-badge-row h1 {
          font-size: 28px;
          font-weight: 900;
          margin: 0;
        }

        .profile-email-text {
          color: var(--text-dim);
          font-size: 13.5px;
          margin-bottom: 10px;
        }

        .profile-bio-quote {
          color: var(--text-muted);
          font-size: 14px;
          font-style: italic;
          margin: 0;
        }

        .profile-stats-summary {
          display: flex;
          gap: 16px;
        }

        .stat-pill {
          padding: 14px 20px;
          border-radius: var(--radius-md);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          text-align: center;
        }

        .stat-pill strong {
          display: block;
          font-size: 20px;
          color: var(--accent-primary);
        }

        .stat-pill small {
          font-size: 11px;
          color: var(--text-dim);
        }

        /* 2-Col Settings */
        .profile-settings-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 28px;
        }

        .profile-card {
          padding: 30px;
          border-radius: var(--radius-xl);
        }

        .card-section-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-color);
        }

        .section-icon {
          color: var(--accent-primary);
          font-size: 18px;
        }

        .card-section-title h3 {
          font-size: 18px;
          font-weight: 800;
          margin: 0;
        }

        .profile-edit-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-group-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group-field label {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-muted);
        }

        .avatar-selection-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .avatar-option-btn {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          font-size: 20px;
          cursor: pointer;
          transition: 0.2s;
          display: grid;
          place-items: center;
        }

        .avatar-option-btn:hover {
          border-color: var(--accent-primary);
          transform: scale(1.1);
        }

        .avatar-option-btn.active {
          border-color: var(--accent-primary);
          background: rgba(124, 92, 255, 0.2);
          box-shadow: 0 0 15px rgba(124, 92, 255, 0.4);
        }

        .form-group-field input,
        .form-group-field textarea {
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          color: var(--text-main);
          font-size: 14px;
          outline: none;
        }

        .form-group-field input:focus,
        .form-group-field textarea:focus {
          border-color: var(--accent-primary);
        }

        .save-profile-btn {
          margin-top: 10px;
        }

        .save-success-alert {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: var(--radius-md);
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          font-size: 13px;
          font-weight: 700;
        }

        /* Preferences */
        .preferences-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .pref-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
        }

        .pref-item strong {
          display: block;
          font-size: 14px;
          margin-bottom: 2px;
        }

        .pref-item small {
          color: var(--text-dim);
          font-size: 11.5px;
        }

        .api-item {
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        .api-key-label {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .api-key-display {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
          width: 100%;
        }

        .api-key-display code {
          flex: 1;
          padding: 8px 12px;
          background: var(--bg-main);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          font-family: monospace;
          font-size: 12px;
          color: var(--accent-secondary);
        }

        .copy-key-btn {
          padding: 8px 14px !important;
          font-size: 12px !important;
        }

        /* Toggle */
        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          inset: 0;
          background-color: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          transition: 0.3s;
          border-radius: 34px;
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.3s;
          border-radius: 50%;
        }

        .toggle-switch input:checked + .toggle-slider {
          background-color: var(--accent-primary);
          border-color: var(--accent-primary);
        }

        .toggle-switch input:checked + .toggle-slider:before {
          transform: translateX(20px);
        }

        @media (max-width: 900px) {
          .profile-settings-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default Profile;