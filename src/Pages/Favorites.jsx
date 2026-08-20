import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaTrash, FaBalanceScale, FaSearch, FaRocket, FaUndo } from "react-icons/fa";
import { useApp } from "../context/AppContext";
import { AI_TOOLS } from "../data/aiToolsData";
import ToolCard from "../components/ToolCard";

function Favorites() {
  const navigate = useNavigate();
  const { favorites, toggleFavorite, setCompareList, showToast } = useApp();
  const [searchFav, setSearchFav] = useState("");

  const favoriteTools = AI_TOOLS.filter((t) => favorites.includes(t.id));

  const filteredFavorites = favoriteTools.filter((t) =>
    !searchFav.trim() ||
    t.name.toLowerCase().includes(searchFav.toLowerCase()) ||
    t.categoryLabel.toLowerCase().includes(searchFav.toLowerCase())
  );

  const handleCompareFavorites = () => {
    if (favoriteTools.length < 2) {
      showToast("Please save at least 2 favorite tools to compare!", "info");
      return;
    }
    setCompareList([favoriteTools[0].id, favoriteTools[1].id]);
    navigate("/compare");
  };

  return (
    <div className="favorites-page-container">
      {/* Header Banner */}
      <div className="favorites-hero-banner glass-card">
        <div className="banner-left">
          <span className="badge-glow"><FaHeart /> YOUR PRIVATE STACK</span>
          <h1>❤️ Favorite AI Tools Collection</h1>
          <p>
            Quick access to all your bookmarked models, prompts, and productivity engines saved locally in your workspace.
          </p>
        </div>

        {favoriteTools.length >= 2 && (
          <button
            type="button"
            className="btn-primary compare-favs-cta"
            onClick={handleCompareFavorites}
          >
            <FaBalanceScale /> Compare Saved Tools
          </button>
        )}
      </div>

      {/* Filter / Search Bar */}
      {favoriteTools.length > 0 && (
        <div className="favorites-search-bar glass-card">
          <div className="fav-search-input">
            <FaSearch className="fav-search-icon" />
            <input
              type="text"
              placeholder="Search within your saved favorites..."
              value={searchFav}
              onChange={(e) => setSearchFav(e.target.value)}
            />
          </div>

          <div className="fav-counter-badge">
            <strong>{filteredFavorites.length}</strong> of {favoriteTools.length} tools saved
          </div>
        </div>
      )}

      {/* Grid or Empty State */}
      {favoriteTools.length === 0 ? (
        <div className="empty-favorites-card glass-card">
          <div className="empty-heart-icon">💔</div>
          <h2>No Saved AI Tools Yet</h2>
          <p>
            You haven't bookmarked any tools yet. Explore our directory of 30+ AI models and click the heart icon on any card to build your custom stack!
          </p>
          <Link to="/tools" className="btn-primary browse-tools-cta">
            <FaRocket /> Browse AI Directory
          </Link>
        </div>
      ) : filteredFavorites.length === 0 ? (
        <div className="empty-favorites-card glass-card">
          <div className="empty-heart-icon">🔍</div>
          <h2>No Matching Favorites</h2>
          <p>No saved tool matches your search keyword "{searchFav}".</p>
          <button type="button" className="btn-secondary" onClick={() => setSearchFav("")}>
            <FaUndo /> Clear Search
          </button>
        </div>
      ) : (
        <div className="tools-grid">
          {filteredFavorites.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}

      <style>{`
        .favorites-page-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .favorites-hero-banner {
          padding: 36px 40px;
          border-radius: var(--radius-xl);
          background: linear-gradient(135deg, var(--bg-surface) 0%, rgba(239, 68, 68, 0.08) 100%);
          border: 1px solid var(--border-highlight);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .favorites-hero-banner h1 {
          font-size: 32px;
          font-weight: 900;
          margin: 12px 0 8px;
        }

        .favorites-hero-banner p {
          color: var(--text-muted);
          font-size: 15px;
          max-width: 680px;
          margin: 0;
        }

        .compare-favs-cta {
          white-space: nowrap;
          padding: 14px 24px !important;
        }

        .favorites-search-bar {
          padding: 16px 24px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .fav-search-input {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }

        .fav-search-icon {
          color: var(--accent-primary);
        }

        .fav-search-input input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-main);
          font-size: 14px;
        }

        .fav-counter-badge {
          font-size: 13px;
          color: var(--text-muted);
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
        }

        .fav-counter-badge strong {
          color: var(--accent-primary);
        }

        .empty-favorites-card {
          text-align: center;
          padding: 80px 24px;
          border-radius: var(--radius-xl);
        }

        .empty-heart-icon {
          font-size: 56px;
          margin-bottom: 16px;
        }

        .empty-favorites-card h2 {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .empty-favorites-card p {
          color: var(--text-muted);
          font-size: 14.5px;
          max-width: 500px;
          margin: 0 auto 24px;
          line-height: 1.6;
        }

        .browse-tools-cta {
          padding: 14px 28px !important;
          border-radius: var(--radius-pill) !important;
        }

        @media (max-width: 768px) {
          .favorites-hero-banner {
            flex-direction: column;
            align-items: flex-start;
          }
          .compare-favs-cta {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default Favorites;