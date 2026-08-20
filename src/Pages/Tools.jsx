import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  FaSearch,
  FaSlidersH,
  FaTimes,
  FaThLarge,
  FaList,
  FaFire,
  FaStar,
  FaFilter,
  FaUndo,
} from "react-icons/fa";
import { AI_TOOLS, AI_CATEGORIES } from "../data/aiToolsData";
import ToolCard from "../components/ToolCard";
import AILogo from "../components/AILogos";
import { useApp } from "../context/AppContext";

function Tools() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { openToolModal, isFavorite, toggleFavorite } = useApp();

  const initialSearch = searchParams.get("search") || "";
  const initialCategory = searchParams.get("category") || "all";

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [pricingFilter, setPricingFilter] = useState("all");
  const [minRating, setMinRating] = useState("all");
  const [sortBy, setSortBy] = useState("popular"); // 'popular' | 'rating' | 'growth' | 'name'
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'

  useEffect(() => {
    const q = searchParams.get("search");
    const c = searchParams.get("category");
    if (q !== null) setSearchQuery(q);
    if (c !== null) setSelectedCategory(c);
  }, [searchParams]);

  // Filter & sort logic
  const filteredTools = useMemo(() => {
    return AI_TOOLS.filter((tool) => {
      // Search match
      const queryMatch =
        !searchQuery.trim() ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category match
      const categoryMatch =
        selectedCategory === "all" || tool.category === selectedCategory;

      // Pricing match
      const pricingMatch =
        pricingFilter === "all" ||
        tool.pricingModel.toLowerCase().includes(pricingFilter.toLowerCase());

      // Rating match
      const ratingMatch =
        minRating === "all" || tool.rating >= parseFloat(minRating);

      return queryMatch && categoryMatch && pricingMatch && ratingMatch;
    }).sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "growth") return parseInt(b.growthRate) - parseInt(a.growthRate);
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return (b.trendingScore || 0) - (a.trendingScore || 0); // Default popular
    });
  }, [searchQuery, selectedCategory, pricingFilter, minRating, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setPricingFilter("all");
    setMinRating("all");
    setSortBy("popular");
    setSearchParams({});
  };

  const hasActiveFilters =
    searchQuery || selectedCategory !== "all" || pricingFilter !== "all" || minRating !== "all" || sortBy !== "popular";

  return (
    <div className="tools-directory-page">
      {/* Page Header Banner */}
      <div className="tools-page-header glass-card">
        <span className="badge-glow">🤖 FRONTIER AI DIRECTORY</span>
        <h1>Explore 30+ Leading AI Models & Tools</h1>
        <p>
          Discover cutting-edge generative AI models, developer tools, and workflow automations with verified benchmarks and live launch links.
        </p>
      </div>

      {/* Control Bar: Search + Filters + View Mode */}
      <div className="directory-controls-bar glass-card">
        {/* Search */}
        <div className="controls-search-wrap">
          <FaSearch className="controls-search-icon" />
          <input
            type="text"
            placeholder="Search by name, tag, or capability (e.g. 'coding', 'reasoning', 'image')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="controls-clear-search"
              onClick={() => setSearchQuery("")}
            >
              <FaTimes />
            </button>
          )}
        </div>

        {/* Dropdowns Row */}
        <div className="controls-dropdowns-group">
          {/* Category */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            {AI_CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.icon} {cat.name}
              </option>
            ))}
          </select>

          {/* Pricing */}
          <select
            value={pricingFilter}
            onChange={(e) => setPricingFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">💳 All Pricing</option>
            <option value="freemium">Free / Freemium</option>
            <option value="free">100% Free / Open Source</option>
            <option value="paid">Paid Only</option>
          </select>

          {/* Min Rating */}
          <select
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
            className="filter-select"
          >
            <option value="all">⭐ Any Rating</option>
            <option value="4.8">⭐ 4.8 & Above</option>
            <option value="4.7">⭐ 4.7 & Above</option>
          </select>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select"
          >
            <option value="popular">🔥 Most Popular</option>
            <option value="rating">⭐ Highest Rated</option>
            <option value="growth">📈 Fastest Growing</option>
            <option value="name">🔤 Alphabetical (A-Z)</option>
          </select>

          {/* View Mode Toggle */}
          <div className="view-mode-toggle">
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
              title="Grid View"
            >
              <FaThLarge />
            </button>
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
              title="List View"
            >
              <FaList />
            </button>
          </div>
        </div>
      </div>

      {/* Active Filter Chips & Results Count Bar */}
      <div className="filter-summary-row">
        <div className="results-count-text">
          Showing <strong>{filteredTools.length}</strong> of <strong>{AI_TOOLS.length}</strong> AI Tools
        </div>

        {hasActiveFilters && (
          <div className="active-chips-area">
            {selectedCategory !== "all" && (
              <span className="active-filter-chip">
                Category: {AI_CATEGORIES.find((c) => c.id === selectedCategory)?.name}
                <button onClick={() => setSelectedCategory("all")}><FaTimes /></button>
              </span>
            )}
            {pricingFilter !== "all" && (
              <span className="active-filter-chip">
                Pricing: {pricingFilter}
                <button onClick={() => setPricingFilter("all")}><FaTimes /></button>
              </span>
            )}
            {minRating !== "all" && (
              <span className="active-filter-chip">
                Rating: {minRating}+
                <button onClick={() => setMinRating("all")}><FaTimes /></button>
              </span>
            )}
            {searchQuery && (
              <span className="active-filter-chip">
                "{searchQuery}"
                <button onClick={() => setSearchQuery("")}><FaTimes /></button>
              </span>
            )}
            <button className="reset-all-btn" onClick={handleResetFilters}>
              <FaUndo /> Reset All
            </button>
          </div>
        )}
      </div>

      {/* Grid or List View Render */}
      {filteredTools.length > 0 ? (
        viewMode === "grid" ? (
          <div className="tools-grid">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="tools-list-view">
            {filteredTools.map((tool) => {
              const favorited = isFavorite(tool.id);
              return (
                <div key={tool.id} className="tool-list-row glass-card">
                  <AILogo name={tool.name} size={48} />
                  <div className="list-main-info">
                    <div className="list-title-row">
                      <h3>{tool.name}</h3>
                      <span className="card-category-pill">{tool.categoryLabel}</span>
                      <span className={`badge-pricing ${(tool.pricingModel || "freemium").toLowerCase()}`}>
                        {tool.pricingModel}
                      </span>
                    </div>
                    <p className="list-tagline">{tool.description}</p>
                    <div className="list-tags">
                      {tool.tags.map((tag) => (
                        <span key={tag} className="tag-chip">#{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="list-metrics-col">
                    <div className="metric-rating">⭐ <strong>{tool.rating}</strong> <small>({(tool.reviewsCount / 1000).toFixed(1)}k)</small></div>
                    <div className="metric-users">👥 {tool.monthlyUsers} users</div>
                    <div className="metric-growth">↗ {tool.growthRate}</div>
                  </div>

                  <div className="list-actions-col">
                    <button
                      type="button"
                      className="btn-primary list-view-btn"
                      onClick={() => openToolModal(tool)}
                    >
                      Quick View
                    </button>
                    <button
                      type="button"
                      className={`card-heart-btn ${favorited ? "active" : ""}`}
                      onClick={() => toggleFavorite(tool.id)}
                    >
                      ❤️
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )
      ) : (
        <div className="empty-results-box glass-card">
          <div className="empty-icon-large">🔍</div>
          <h3>No AI Tools Found</h3>
          <p>
            No tools matched your current search filters. Try clearing your filters or search keywords.
          </p>
          <button type="button" className="btn-primary" onClick={handleResetFilters}>
            <FaUndo /> Reset All Filters
          </button>
        </div>
      )}

      <style>{`
        .tools-directory-page {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .tools-page-header {
          padding: 36px 40px;
          border-radius: var(--radius-xl);
          background: linear-gradient(135deg, var(--bg-surface) 0%, rgba(124, 92, 255, 0.08) 100%);
          border: 1px solid var(--border-highlight);
        }

        .tools-page-header h1 {
          font-size: 32px;
          font-weight: 900;
          margin: 12px 0 8px;
        }

        .tools-page-header p {
          color: var(--text-muted);
          font-size: 15px;
          max-width: 700px;
          margin: 0;
        }

        /* Controls Bar */
        .directory-controls-bar {
          padding: 16px 20px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .controls-search-wrap {
          flex: 1;
          min-width: 260px;
          display: flex;
          align-items: center;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 0 14px;
          height: 44px;
        }

        .controls-search-wrap:focus-within {
          border-color: var(--accent-primary);
        }

        .controls-search-icon {
          color: var(--accent-primary);
          margin-right: 10px;
        }

        .controls-search-wrap input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-main);
          font-size: 13.5px;
        }

        .controls-clear-search {
          color: var(--text-dim);
          cursor: pointer;
        }

        .controls-dropdowns-group {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .filter-select {
          height: 44px;
          padding: 0 14px;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-size: 13px;
          font-weight: 600;
          outline: none;
          cursor: pointer;
        }

        .filter-select:focus {
          border-color: var(--accent-primary);
        }

        .view-mode-toggle {
          display: flex;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          height: 44px;
        }

        .view-toggle-btn {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          color: var(--text-dim);
          cursor: pointer;
          transition: 0.2s;
        }

        .view-toggle-btn.active {
          background: var(--accent-primary);
          color: #ffffff;
        }

        /* Active Chips */
        .filter-summary-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .results-count-text {
          font-size: 14px;
          color: var(--text-muted);
        }

        .results-count-text strong {
          color: var(--text-main);
        }

        .active-chips-area {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .active-filter-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: var(--radius-pill);
          background: rgba(124, 92, 255, 0.12);
          border: 1px solid rgba(124, 92, 255, 0.3);
          color: var(--accent-primary);
          font-size: 12px;
          font-weight: 700;
        }

        .active-filter-chip button {
          cursor: pointer;
          color: var(--accent-primary);
          display: grid;
          place-items: center;
        }

        .reset-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #ef4444;
          font-size: 12.5px;
          font-weight: 700;
          cursor: pointer;
          padding: 5px 10px;
          border-radius: var(--radius-pill);
          background: rgba(239, 68, 68, 0.1);
        }

        /* List View */
        .tools-list-view {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .tool-list-row {
          padding: 20px 24px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          gap: 20px;
          transition: all 0.2s;
        }

        .tool-list-row:hover {
          border-color: var(--border-highlight);
          transform: translateY(-2px);
        }

        .list-main-info {
          flex: 1;
          min-width: 0;
        }

        .list-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 6px;
        }

        .list-title-row h3 {
          font-size: 18px;
          font-weight: 800;
          margin: 0;
        }

        .list-tagline {
          color: var(--text-muted);
          font-size: 13.5px;
          line-height: 1.5;
          margin: 0 0 8px;
        }

        .list-tags {
          display: flex;
          gap: 6px;
        }

        .list-metrics-col {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 12.5px;
          min-width: 140px;
        }

        .metric-growth {
          color: #10b981;
          font-weight: 700;
        }

        .list-actions-col {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .list-view-btn {
          padding: 10px 18px !important;
          font-size: 13px !important;
        }

        /* Empty state */
        .empty-results-box {
          text-align: center;
          padding: 80px 20px;
          border-radius: var(--radius-xl);
        }

        .empty-icon-large {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .empty-results-box h3 {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .empty-results-box p {
          color: var(--text-muted);
          font-size: 14px;
          max-width: 480px;
          margin: 0 auto 24px;
        }

        @media (max-width: 900px) {
          .tool-list-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .list-actions-col {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
}

export default Tools;