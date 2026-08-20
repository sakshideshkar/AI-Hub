import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLayerGroup, FaArrowRight, FaRocket } from "react-icons/fa";
import { AI_CATEGORIES, AI_TOOLS } from "../data/aiToolsData";
import AILogo from "../components/AILogos";

function Categories() {
  const navigate = useNavigate();

  const realCategories = AI_CATEGORIES.filter((c) => c.id !== "all");

  return (
    <div className="categories-page-container">
      {/* Header Banner */}
      <div className="categories-hero-banner glass-card">
        <span className="badge-glow"><FaLayerGroup /> AI ECOSYSTEM ARCHITECTURE</span>
        <h1>Explore AI Tools by Category</h1>
        <p>
          Discover frontier models and specialized software organized across 8 primary domains of artificial intelligence.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="categories-main-grid">
        {realCategories.map((cat) => {
          const sampleTools = AI_TOOLS.filter((t) => t.category === cat.id).slice(0, 3);
          const totalInCat = AI_TOOLS.filter((t) => t.category === cat.id).length;

          return (
            <div
              key={cat.id}
              className="category-card-pro glass-card"
              onClick={() => navigate(`/tools?category=${cat.id}`)}
            >
              <div className="category-top-row">
                <div className="category-emoji-box">{cat.icon}</div>
                <span className="category-tools-count">
                  {totalInCat} Models Available
                </span>
              </div>

              <h2>{cat.name}</h2>
              <p className="category-card-desc">{cat.description}</p>

              {/* Sample Mini Tools Preview */}
              <div className="category-samples-strip">
                <span className="samples-label">Popular in this category:</span>
                <div className="samples-icons-row">
                  {sampleTools.map((tool) => (
                    <div key={tool.id} className="sample-tool-chip" title={tool.name}>
                      <AILogo name={tool.name} size={22} />
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="category-card-footer">
                <span>Browse all {cat.name} tools</span>
                <FaArrowRight className="footer-arrow" />
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .categories-page-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .categories-hero-banner {
          padding: 36px 40px;
          border-radius: var(--radius-xl);
          background: linear-gradient(135deg, var(--bg-surface) 0%, rgba(124, 92, 255, 0.08) 100%);
          border: 1px solid var(--border-highlight);
        }

        .categories-hero-banner h1 {
          font-size: 32px;
          font-weight: 900;
          margin: 12px 0 8px;
        }

        .categories-hero-banner p {
          color: var(--text-muted);
          font-size: 15px;
          max-width: 680px;
          margin: 0;
        }

        .categories-main-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
        }

        .category-card-pro {
          padding: 28px;
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .category-card-pro:hover {
          transform: translateY(-6px);
          border-color: var(--accent-primary);
        }

        .category-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .category-emoji-box {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          background: var(--bg-glass-strong);
          display: grid;
          place-items: center;
          font-size: 26px;
        }

        .category-tools-count {
          font-size: 12px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: var(--radius-pill);
          background: rgba(124, 92, 255, 0.12);
          color: var(--accent-primary);
        }

        .category-card-pro h2 {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 8px;
          color: var(--text-main);
        }

        .category-card-desc {
          font-size: 13.5px;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .category-samples-strip {
          padding: 12px 14px;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          margin-bottom: 20px;
        }

        .samples-label {
          font-size: 11px;
          color: var(--text-dim);
          font-weight: 700;
          display: block;
          margin-bottom: 8px;
        }

        .samples-icons-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .sample-tool-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 8px;
          border-radius: var(--radius-sm);
          background: var(--bg-glass-strong);
          font-size: 11.5px;
          font-weight: 600;
          color: var(--text-muted);
        }

        .category-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid var(--border-color);
          font-size: 13px;
          font-weight: 700;
          color: var(--accent-primary);
        }

        .footer-arrow {
          transition: transform 0.2s;
        }

        .category-card-pro:hover .footer-arrow {
          transform: translateX(5px);
        }

        @media (max-width: 600px) {
          .categories-main-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default Categories;