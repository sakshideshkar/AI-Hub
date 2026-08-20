import React, { useState } from "react";
import { FaFire, FaRocket, FaStar, FaExternalLinkAlt, FaChartLine, FaBolt } from "react-icons/fa";
import { AI_TOOLS, AI_CATEGORIES } from "../data/aiToolsData";
import { useApp } from "../context/AppContext";
import AILogo from "../components/AILogos";

function Trending() {
  const { openToolModal, toggleFavorite, isFavorite } = useApp();
  const [activeCategory, setActiveCategory] = useState("all");

  const sortedTrending = [...AI_TOOLS]
    .filter((tool) => activeCategory === "all" || tool.category === activeCategory)
    .sort((a, b) => (b.trendingScore || 0) - (a.trendingScore || 0));

  return (
    <div className="trending-page-container">
      {/* Header Banner */}
      <div className="trending-hero-banner glass-card">
        <span className="badge-glow"><FaFire /> LIVE LEADERBOARD</span>
        <h1>🔥 Trending AI Models This Week</h1>
        <p>
          Rankings updated weekly based on active user growth, GitHub stars, developer adoption, and community benchmarks.
        </p>

        {/* Category Pills */}
        <div className="trending-category-pills">
          <button
            type="button"
            className={`pill-btn ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            🔥 All Trends
          </button>
          {AI_CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`pill-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="trending-leaderboard-list">
        {sortedTrending.map((tool, index) => {
          const rank = index + 1;
          const favorited = isFavorite(tool.id);

          return (
            <div
              key={tool.id}
              className={`trending-row-card glass-card ${rank <= 3 ? `top-rank rank-${rank}` : ""}`}
            >
              {/* Rank Badge */}
              <div className="rank-badge-box">
                {rank === 1 && <span className="crown-icon">👑</span>}
                <span className="rank-digit">#{rank}</span>
              </div>

              {/* Logo & Main Info */}
              <div className="tool-brand-col">
                <AILogo name={tool.name} size={48} />
                <div className="tool-naming-text">
                  <div className="name-and-tag">
                    <h3>{tool.name}</h3>
                    <span className="card-category-pill">{tool.categoryLabel}</span>
                    <span className={`badge-pricing ${(tool.pricingModel || "freemium").toLowerCase()}`}>
                      {tool.pricingModel}
                    </span>
                  </div>
                  <p className="tool-one-liner">{tool.tagline}</p>
                </div>
              </div>

              {/* Popularity Meter */}
              <div className="popularity-meter-col">
                <div className="score-text">
                  <small>Popularity Score</small>
                  <strong>{tool.trendingScore || 90}/100</strong>
                </div>
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${tool.trendingScore || 90}%` }}
                  ></div>
                </div>
              </div>

              {/* Growth Metric */}
              <div className="growth-metric-col">
                <span className="growth-delta-pill">
                  <FaChartLine /> {tool.growthRate}
                </span>
                <small>{tool.monthlyUsers} users</small>
              </div>

              {/* Action Buttons */}
              <div className="trending-actions-col">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => openToolModal(tool)}
                >
                  Quick View
                </button>
                <button
                  type="button"
                  className={`card-heart-btn ${favorited ? "active" : ""}`}
                  onClick={() => toggleFavorite(tool.id)}
                  title={favorited ? "Favorited" : "Add to favorites"}
                >
                  ❤️
                </button>
                <a
                  href={tool.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary launch-mini-btn"
                  title="Launch tool"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .trending-page-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .trending-hero-banner {
          padding: 36px 40px;
          border-radius: var(--radius-xl);
          background: linear-gradient(135deg, var(--bg-surface) 0%, rgba(236, 72, 153, 0.08) 100%);
          border: 1px solid var(--border-highlight);
        }

        .trending-hero-banner h1 {
          font-size: 32px;
          font-weight: 900;
          margin: 12px 0 8px;
        }

        .trending-hero-banner p {
          color: var(--text-muted);
          font-size: 15px;
          max-width: 720px;
          margin: 0 0 24px;
        }

        .trending-category-pills {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 6px;
        }

        .pill-btn {
          padding: 8px 16px;
          border-radius: var(--radius-pill);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
          transition: 0.2s;
        }

        .pill-btn:hover {
          color: var(--text-main);
          border-color: var(--accent-primary);
        }

        .pill-btn.active {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
          box-shadow: 0 4px 15px rgba(124, 92, 255, 0.35);
        }

        .trending-leaderboard-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .trending-row-card {
          padding: 20px 28px;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          gap: 24px;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .trending-row-card:hover {
          transform: translateY(-3px) translateX(4px);
          border-color: var(--accent-primary);
        }

        .trending-row-card.rank-1 {
          border-color: rgba(245, 158, 11, 0.4);
          background: linear-gradient(90deg, var(--bg-surface) 0%, rgba(245, 158, 11, 0.05) 100%);
        }

        .trending-row-card.rank-2 {
          border-color: rgba(124, 92, 255, 0.4);
        }

        .rank-badge-box {
          width: 50px;
          text-align: center;
          flex-shrink: 0;
        }

        .crown-icon {
          display: block;
          font-size: 18px;
          margin-bottom: -2px;
        }

        .rank-digit {
          font-size: 22px;
          font-weight: 900;
          color: var(--accent-primary);
        }

        .tool-brand-col {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
          min-width: 0;
        }

        .name-and-tag {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .name-and-tag h3 {
          font-size: 18px;
          font-weight: 800;
          margin: 0;
        }

        .tool-one-liner {
          font-size: 13px;
          color: var(--text-muted);
          margin: 4px 0 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 480px;
        }

        .popularity-meter-col {
          width: 140px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .score-text {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: var(--text-dim);
        }

        .score-text strong {
          color: var(--text-main);
        }

        .progress-bar-bg {
          height: 6px;
          border-radius: 99px;
          background: var(--bg-glass-strong);
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          border-radius: 99px;
          background: var(--accent-gradient);
        }

        .growth-metric-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
          min-width: 110px;
        }

        .growth-delta-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          font-weight: 800;
          font-size: 12px;
        }

        .growth-metric-col small {
          font-size: 11px;
          color: var(--text-dim);
        }

        .trending-actions-col {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .launch-mini-btn {
          width: 38px;
          height: 38px;
          padding: 0 !important;
          border-radius: var(--radius-md) !important;
        }

        @media (max-width: 900px) {
          .trending-row-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .popularity-meter-col, .growth-metric-col {
            width: 100%;
            align-items: flex-start;
          }
          .trending-actions-col {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
}

export default Trending;