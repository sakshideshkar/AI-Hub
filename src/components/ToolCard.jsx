import React from "react";
import { FaStar, FaHeart, FaArrowRight, FaExternalLinkAlt, FaShieldAlt, FaBalanceScale } from "react-icons/fa";
import { useApp } from "../context/AppContext";
import AILogo from "./AILogos";

function ToolCard({ tool }) {
  const { toggleFavorite, isFavorite, openToolModal, setCompareList } = useApp();

  if (!tool) return null;

  const favorited = isFavorite(tool.id);

  const handleCompareClick = (e) => {
    e.stopPropagation();
    setCompareList((prev) => {
      if (prev.includes(tool.id)) return prev;
      return [prev[0] || "chatgpt", tool.id];
    });
    window.location.href = "/compare";
  };

  return (
    <div className={`tool-card-modern glass-card ${tool.featured ? "is-featured" : ""}`}>
      {tool.featured && <div className="featured-ribbon">FEATURED</div>}

      {/* Card Header */}
      <div className="card-head">
        <div className="card-logo-box">
          <AILogo name={tool.name} size={48} />
        </div>

        <div className="card-title-group">
          <div className="title-verified">
            <h4>{tool.name}</h4>
            {tool.verified && (
              <FaShieldAlt className="verified-icon" title="Verified AI Platform" />
            )}
          </div>
          <span className="card-category-pill">{tool.categoryLabel}</span>
        </div>

        <button
          type="button"
          className={`card-heart-btn ${favorited ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(tool.id);
          }}
          title={favorited ? "Remove from Favorites" : "Add to Favorites"}
        >
          <FaHeart />
        </button>
      </div>

      {/* Description */}
      <p className="card-tagline">{tool.tagline || tool.description}</p>

      {/* Tags */}
      <div className="card-tags-row">
        {(tool.tags || []).slice(0, 3).map((tag) => (
          <span key={tag} className="tag-chip">
            #{tag}
          </span>
        ))}
      </div>

      {/* Metrics Row */}
      <div className="card-metrics-row">
        <div className="metric-item">
          <FaStar className="star-yellow" />
          <strong>{tool.rating}</strong>
          <small>({(tool.reviewsCount / 1000).toFixed(1)}k)</small>
        </div>

        <div className="metric-item users">
          👥 {tool.monthlyUsers}
        </div>

        <span className={`badge-pricing ${(tool.pricingModel || "freemium").toLowerCase()}`}>
          {tool.pricingModel}
        </span>
      </div>

      {/* Card Actions */}
      <div className="card-actions-bar">
        <button
          type="button"
          className="btn-details"
          onClick={() => openToolModal(tool)}
        >
          Quick View <FaArrowRight style={{ fontSize: "11px" }} />
        </button>

        <button
          type="button"
          className="btn-compare-action"
          onClick={handleCompareClick}
          title="Compare with another AI tool"
        >
          <FaBalanceScale />
        </button>

        <a
          href={tool.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-external-link"
          title={`Visit ${tool.name}`}
          onClick={(e) => e.stopPropagation()}
        >
          <FaExternalLinkAlt />
        </a>
      </div>

      <style>{`
        .tool-card-modern {
          position: relative;
          padding: 24px;
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .tool-card-modern.is-featured {
          border-color: rgba(124, 92, 255, 0.4);
          background: linear-gradient(145deg, var(--bg-card) 0%, rgba(124, 92, 255, 0.05) 100%);
        }

        .featured-ribbon {
          position: absolute;
          top: 14px;
          right: -32px;
          transform: rotate(45deg);
          background: var(--accent-gradient);
          color: white;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
          padding: 4px 34px;
          box-shadow: 0 4px 10px rgba(124, 92, 255, 0.4);
        }

        .card-head {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
        }

        .card-logo-box {
          flex-shrink: 0;
        }

        .card-title-group {
          flex: 1;
          min-width: 0;
        }

        .title-verified {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .title-verified h4 {
          font-size: 17px;
          font-weight: 800;
          color: var(--text-main);
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .verified-icon {
          color: #00d4ff;
          font-size: 13px;
        }

        .card-category-pill {
          font-size: 12px;
          font-weight: 600;
          color: var(--accent-primary);
          display: block;
          margin-top: 2px;
        }

        .card-heart-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          color: var(--text-dim);
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: 0.2s;
          font-size: 14px;
        }

        .card-heart-btn:hover {
          color: #ef4444;
          transform: scale(1.15);
        }

        .card-heart-btn.active {
          color: #ef4444;
          background: rgba(239, 68, 68, 0.12);
          border-color: rgba(239, 68, 68, 0.35);
        }

        .card-tagline {
          color: var(--text-muted);
          font-size: 13.5px;
          line-height: 1.6;
          min-height: 44px;
          margin: 0 0 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-tags-row {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }

        .tag-chip {
          padding: 3px 8px;
          border-radius: var(--radius-sm);
          background: var(--bg-glass-strong);
          color: var(--text-dim);
          font-size: 11px;
          font-weight: 600;
        }

        .card-metrics-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 16px;
          font-size: 12.5px;
        }

        .metric-item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: var(--text-main);
        }

        .metric-item.users {
          color: var(--text-dim);
        }

        .star-yellow {
          color: #f59e0b;
        }

        .metric-item small {
          color: var(--text-dim);
        }

        .card-actions-bar {
          display: flex;
          gap: 8px;
          margin-top: auto;
        }

        .btn-details {
          flex: 1;
          height: 38px;
          border-radius: var(--radius-md);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          font-weight: 700;
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-details:hover {
          background: var(--accent-gradient);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 8px 20px rgba(124, 92, 255, 0.35);
        }

        .btn-compare-action, .btn-external-link {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: 0.2s;
          font-size: 13px;
        }

        .btn-compare-action:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
        }

        .btn-external-link:hover {
          color: var(--accent-secondary);
          border-color: var(--accent-secondary);
        }
      `}</style>
    </div>
  );
}

export default ToolCard;