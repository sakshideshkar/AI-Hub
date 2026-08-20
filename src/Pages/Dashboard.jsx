import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaRocket,
  FaRobot,
  FaHeart,
  FaBalanceScale,
  FaFire,
  FaLayerGroup,
  FaMagic,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import { useApp } from "../context/AppContext";
import { AI_TOOLS, AI_CATEGORIES } from "../data/aiToolsData";
import ToolCard from "../components/ToolCard";
import AILogo from "../components/AILogos";

function Dashboard() {
  const navigate = useNavigate();
  const { user, favorites, recentActivity, setIsAiAssistantOpen, openToolModal } = useApp();
  const [activeCategory, setActiveCategory] = useState("all");

  const popularTools = AI_TOOLS.filter((t) => {
    if (activeCategory === "all") return t.featured;
    return t.category === activeCategory;
  }).slice(0, 6);

  const trendingTop = AI_TOOLS.slice(0, 4);

  return (
    <div className="dashboard-page-container">
      {/* Header Banner */}
      <div className="dashboard-welcome-banner glass-card">
        <div className="welcome-text-col">
          <div className="welcome-badge badge-glow">
            ✨ AI-HUB EXECUTIVE DASHBOARD
          </div>
          <h1>
            Welcome back, <span className="gradient-text">{user.name || "Explorer"}</span> 👋
          </h1>
          <p>
            Explore real-time benchmarks, discover newly launched models, and manage your custom AI toolkit.
          </p>

          <div className="banner-actions-row">
            <Link to="/tools" className="btn-primary">
              <FaRocket /> Browse Directory
            </Link>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setIsAiAssistantOpen(true)}
            >
              <FaMagic /> Ask AI Matchmaker
            </button>
          </div>
        </div>

        <div className="welcome-avatar-stat">
          <div className="user-big-avatar">{user.avatar || "👩‍💻"}</div>
          <div className="user-membership-info">
            <strong>{user.plan || "AIHUB Pro"}</strong>
            <small>Active Explorer</small>
          </div>
        </div>
      </div>

      {/* Stats Counter Grid */}
      <div className="stats-dashboard-grid">
        <div className="stat-box glass-card">
          <div className="stat-icon-wrapper blue">
            <FaRobot />
          </div>
          <div className="stat-text-area">
            <h3>32+</h3>
            <p>Frontier Models</p>
          </div>
        </div>

        <div className="stat-box glass-card" onClick={() => navigate("/favorites")} style={{ cursor: "pointer" }}>
          <div className="stat-icon-wrapper red">
            <FaHeart />
          </div>
          <div className="stat-text-area">
            <h3>{favorites.length}</h3>
            <p>Saved Favorites</p>
          </div>
        </div>

        <div className="stat-box glass-card" onClick={() => navigate("/compare")} style={{ cursor: "pointer" }}>
          <div className="stat-icon-wrapper purple">
            <FaBalanceScale />
          </div>
          <div className="stat-text-area">
            <h3>Side-by-Side</h3>
            <p>Model Matrix</p>
          </div>
        </div>

        <div className="stat-box glass-card" onClick={() => navigate("/categories")} style={{ cursor: "pointer" }}>
          <div className="stat-icon-wrapper cyan">
            <FaLayerGroup />
          </div>
          <div className="stat-text-area">
            <h3>8</h3>
            <p>AI Categories</p>
          </div>
        </div>
      </div>

      {/* Popular AI Tools Section */}
      <div className="dashboard-content-section">
        <div className="section-header-flex">
          <div>
            <h2>⭐ Popular & Frontier Models</h2>
            <p>Hand-picked, state-of-the-art tools across creative and technical sectors.</p>
          </div>
          <Link to="/tools" className="view-all-link">
            View All ({AI_TOOLS.length}) <FaArrowRight />
          </Link>
        </div>

        {/* Category Tabs Filter */}
        <div className="category-pill-bar">
          <button
            type="button"
            className={`filter-pill ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            🌟 All Featured
          </button>
          {AI_CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-pill ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="tools-grid">
          {popularTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>

      {/* 2-Column Section: Trending Spotlight & Recent Activity */}
      <div className="dashboard-dual-grid">
        {/* Trending Spotlight */}
        <div className="dual-card glass-card">
          <div className="dual-card-header">
            <div className="title-with-icon">
              <FaFire className="fire-icon" />
              <h3>Trending This Week</h3>
            </div>
            <Link to="/trending" className="link-arrow">Full Leaderboard →</Link>
          </div>

          <div className="trending-mini-list">
            {trendingTop.map((tool, index) => (
              <div
                key={tool.id}
                className="trending-mini-item"
                onClick={() => openToolModal(tool)}
              >
                <span className="rank-num">#{index + 1}</span>
                <AILogo name={tool.name} size={36} />
                <div className="trending-info-text">
                  <strong>{tool.name}</strong>
                  <small>{tool.categoryLabel} • {tool.monthlyUsers} users</small>
                </div>
                <div className="trending-growth-badge">
                  {tool.growthRate}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity Log */}
        <div className="dual-card glass-card">
          <div className="dual-card-header">
            <div className="title-with-icon">
              <FaRocket className="rocket-icon" />
              <h3>Your AI Activity</h3>
            </div>
            <span className="activity-badge-count">{recentActivity.length} events</span>
          </div>

          <div className="activity-stream-list">
            {recentActivity.slice(0, 5).map((act) => (
              <div key={act.id} className="activity-stream-item">
                <div className="act-icon-box">{act.icon || "⚡"}</div>
                <div className="act-content-text">
                  <strong>{act.text || act.toolName}</strong>
                  <small>{act.time}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .dashboard-page-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        /* Welcome Banner */
        .dashboard-welcome-banner {
          padding: 40px;
          border-radius: var(--radius-xl);
          background: linear-gradient(135deg, var(--bg-surface) 0%, rgba(124, 92, 255, 0.1) 100%);
          border: 1px solid var(--border-highlight);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .welcome-text-col {
          max-width: 650px;
        }

        .welcome-badge {
          margin-bottom: 14px;
        }

        .welcome-text-col h1 {
          font-size: 32px;
          font-weight: 900;
          margin-bottom: 10px;
        }

        .welcome-text-col p {
          color: var(--text-muted);
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .banner-actions-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .welcome-avatar-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 24px;
          border-radius: var(--radius-lg);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          text-align: center;
          min-width: 170px;
        }

        .user-big-avatar {
          font-size: 48px;
        }

        .user-membership-info strong {
          display: block;
          font-size: 14px;
          color: var(--accent-primary);
        }

        .user-membership-info small {
          font-size: 11px;
          color: var(--text-dim);
        }

        /* Stats Grid */
        .stats-dashboard-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .stat-box {
          padding: 22px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          gap: 16px;
          transition: transform 0.2s;
        }

        .stat-box:hover {
          transform: translateY(-4px);
        }

        .stat-icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          display: grid;
          place-items: center;
          font-size: 22px;
          flex-shrink: 0;
        }

        .stat-icon-wrapper.blue { background: rgba(59, 130, 246, 0.15); color: #3b82f6; }
        .stat-icon-wrapper.red { background: rgba(239, 68, 68, 0.15); color: #ef4444; }
        .stat-icon-wrapper.purple { background: rgba(139, 92, 246, 0.15); color: #8b5cf6; }
        .stat-icon-wrapper.cyan { background: rgba(6, 182, 212, 0.15); color: #06b6d4; }

        .stat-text-area h3 {
          font-size: 24px;
          font-weight: 800;
          margin: 0;
          color: var(--text-main);
        }

        .stat-text-area p {
          font-size: 13px;
          color: var(--text-muted);
          margin: 2px 0 0;
          font-weight: 600;
        }

        /* Section Header */
        .section-header-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .section-header-flex h2 {
          font-size: 24px;
          font-weight: 800;
          margin: 0 0 4px;
        }

        .section-header-flex p {
          color: var(--text-muted);
          font-size: 14px;
          margin: 0;
        }

        .view-all-link {
          font-size: 14px;
          font-weight: 700;
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          gap: 6px;
          transition: 0.2s;
        }

        .view-all-link:hover {
          transform: translateX(4px);
        }

        /* Filter Pills */
        .category-pill-bar {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 10px;
          margin-bottom: 24px;
        }

        .filter-pill {
          padding: 8px 16px;
          border-radius: var(--radius-pill);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-weight: 600;
          font-size: 13px;
          white-space: nowrap;
          cursor: pointer;
          transition: 0.2s;
        }

        .filter-pill:hover {
          color: var(--text-main);
          border-color: var(--accent-primary);
        }

        .filter-pill.active {
          background: var(--accent-primary);
          color: #ffffff;
          border-color: var(--accent-primary);
          box-shadow: 0 4px 15px rgba(124, 92, 255, 0.35);
        }

        /* Dual Grid */
        .dashboard-dual-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .dual-card {
          padding: 28px;
          border-radius: var(--radius-xl);
        }

        .dual-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .title-with-icon {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .title-with-icon h3 {
          font-size: 18px;
          font-weight: 800;
          margin: 0;
        }

        .fire-icon { color: #ec4899; }
        .rocket-icon { color: var(--accent-primary); }

        .link-arrow {
          font-size: 13px;
          font-weight: 700;
          color: var(--accent-primary);
        }

        .activity-badge-count {
          font-size: 11px;
          padding: 3px 8px;
          border-radius: var(--radius-pill);
          background: var(--bg-glass-strong);
          color: var(--text-dim);
          font-weight: 700;
        }

        /* Trending Mini */
        .trending-mini-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .trending-mini-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          cursor: pointer;
          transition: 0.2s;
        }

        .trending-mini-item:hover {
          border-color: var(--accent-primary);
          transform: translateX(4px);
        }

        .rank-num {
          font-weight: 900;
          font-size: 14px;
          color: var(--accent-primary);
          width: 26px;
        }

        .trending-info-text {
          flex: 1;
        }

        .trending-info-text strong {
          display: block;
          font-size: 14px;
        }

        .trending-info-text small {
          font-size: 11.5px;
          color: var(--text-dim);
        }

        .trending-growth-badge {
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          font-weight: 800;
          font-size: 12px;
        }

        /* Activity Stream */
        .activity-stream-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .activity-stream-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
        }

        .act-icon-box {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: var(--bg-glass-strong);
          display: grid;
          place-items: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .act-content-text {
          flex: 1;
        }

        .act-content-text strong {
          display: block;
          font-size: 13.5px;
        }

        .act-content-text small {
          font-size: 11px;
          color: var(--text-dim);
        }

        @media (max-width: 1024px) {
          .stats-dashboard-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .dashboard-dual-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .dashboard-welcome-banner {
            flex-direction: column;
            padding: 24px;
          }
          .stats-dashboard-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default Dashboard;