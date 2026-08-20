import React, { useState } from "react";
import { FaBalanceScale, FaCheck, FaTimes, FaStar, FaExternalLinkAlt, FaRocket, FaShieldAlt } from "react-icons/fa";
import { AI_TOOLS } from "../data/aiToolsData";
import { useApp } from "../context/AppContext";
import AILogo from "../components/AILogos";

function Compare() {
  const { compareList, setCompareList, openToolModal } = useApp();

  const [tool1Id, setTool1Id] = useState(compareList[0] || "chatgpt");
  const [tool2Id, setTool2Id] = useState(compareList[1] || "claude");
  const [tool3Id, setTool3Id] = useState(compareList[2] || "gemini");
  const [enable3Way, setEnable3Way] = useState(false);

  const t1 = AI_TOOLS.find((t) => t.id === tool1Id) || AI_TOOLS[0];
  const t2 = AI_TOOLS.find((t) => t.id === tool2Id) || AI_TOOLS[1];
  const t3 = AI_TOOLS.find((t) => t.id === tool3Id) || AI_TOOLS[2];

  const comparedTools = enable3Way ? [t1, t2, t3] : [t1, t2];

  const comparisonSpecs = [
    { label: "Creator / Org", key: "creator" },
    { label: "Primary Category", key: "categoryLabel" },
    { label: "Pricing Model", key: "pricingModel" },
    { label: "Monthly Cost / Tier", key: "priceText" },
    { label: "Context Window", specKey: "contextWindow" },
    { label: "Free Tier Policy", specKey: "freeTier" },
    { label: "API Availability", specKey: "apiAvailable" },
    { label: "Image Generation", specKey: "imageGeneration" },
    { label: "Voice / Speech Mode", specKey: "voiceMode" },
    { label: "Coding Benchmark / IDE", specKey: "codingSupport" },
    { label: "Supported Platforms", specKey: "platforms" },
  ];

  return (
    <div className="compare-page-container">
      {/* Header Banner */}
      <div className="compare-hero-banner glass-card">
        <span className="badge-glow"><FaBalanceScale /> BENCHMARK ENGINE</span>
        <h1>Side-by-Side Model Comparison</h1>
        <p>
          Evaluate architecture, context lengths, free tier limits, and API rates to choose the optimal AI tool for your project.
        </p>

        <div className="compare-toggle-row">
          <button
            type="button"
            className={`btn-secondary mode-switch ${!enable3Way ? "active" : ""}`}
            onClick={() => setEnable3Way(false)}
          >
            2 Models Comparison
          </button>
          <button
            type="button"
            className={`btn-secondary mode-switch ${enable3Way ? "active" : ""}`}
            onClick={() => setEnable3Way(true)}
          >
            3 Models Comparison (Pro)
          </button>
        </div>
      </div>

      {/* Selectors Bar */}
      <div className="compare-selectors-bar glass-card">
        <div className="selector-group">
          <label>Select Model #1:</label>
          <select value={tool1Id} onChange={(e) => setTool1Id(e.target.value)} className="model-select">
            {AI_TOOLS.map((t) => (
              <option key={t.id} value={t.id}>{t.name} ({t.categoryLabel})</option>
            ))}
          </select>
        </div>

        <div className="selector-vs-badge">VS</div>

        <div className="selector-group">
          <label>Select Model #2:</label>
          <select value={tool2Id} onChange={(e) => setTool2Id(e.target.value)} className="model-select">
            {AI_TOOLS.map((t) => (
              <option key={t.id} value={t.id}>{t.name} ({t.categoryLabel})</option>
            ))}
          </select>
        </div>

        {enable3Way && (
          <>
            <div className="selector-vs-badge">VS</div>
            <div className="selector-group">
              <label>Select Model #3:</label>
              <select value={tool3Id} onChange={(e) => setTool3Id(e.target.value)} className="model-select">
                {AI_TOOLS.map((t) => (
                  <option key={t.id} value={t.id}>{t.name} ({t.categoryLabel})</option>
                ))}
              </select>
            </div>
          </>
        )}
      </div>

      {/* Comparison Matrix Table */}
      <div className="comparison-table-wrapper glass-card">
        {/* Table Header: Tool Cards */}
        <div className={`compare-head-grid ${enable3Way ? "three-way" : "two-way"}`}>
          <div className="spec-label-header">
            <h3>Key Capabilities</h3>
            <small>Direct specification breakdown</small>
          </div>

          {comparedTools.map((tool) => (
            <div key={tool.id} className="compared-tool-hero">
              <AILogo name={tool.name} size={56} />
              <div className="tool-hero-title">
                <h2>{tool.name}</h2>
                <div className="rating-pill">
                  <FaStar className="star-icon" /> {tool.rating} ({tool.monthlyUsers} users)
                </div>
              </div>

              <div className="compared-hero-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => openToolModal(tool)}
                >
                  View Details
                </button>
                <a
                  href={tool.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Launch <FaExternalLinkAlt style={{ fontSize: "11px" }} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Spec Rows */}
        <div className="compare-rows-container">
          {comparisonSpecs.map((spec, index) => (
            <div key={index} className={`compare-spec-row ${enable3Way ? "three-way" : "two-way"}`}>
              <div className="spec-name-cell">
                <strong>{spec.label}</strong>
              </div>

              {comparedTools.map((tool) => {
                const val = spec.specKey ? tool.specs[spec.specKey] : tool[spec.key];
                return (
                  <div key={tool.id} className="spec-val-cell">
                    {val || "—"}
                  </div>
                );
              })}
            </div>
          ))}

          {/* Pros & Key Strengths */}
          <div className={`compare-spec-row pros-row ${enable3Way ? "three-way" : "two-way"}`}>
            <div className="spec-name-cell">
              <strong>Top Strengths</strong>
            </div>

            {comparedTools.map((tool) => (
              <div key={tool.id} className="spec-val-cell pros-cell">
                <ul>
                  {tool.pros.map((p, i) => (
                    <li key={i}><FaCheck className="check-green" /> {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Cons & Considerations */}
          <div className={`compare-spec-row cons-row ${enable3Way ? "three-way" : "two-way"}`}>
            <div className="spec-name-cell">
              <strong>Considerations</strong>
            </div>

            {comparedTools.map((tool) => (
              <div key={tool.id} className="spec-val-cell cons-cell">
                <ul>
                  {tool.cons.map((c, i) => (
                    <li key={i}>• {c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .compare-page-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .compare-hero-banner {
          padding: 36px 40px;
          border-radius: var(--radius-xl);
          background: linear-gradient(135deg, var(--bg-surface) 0%, rgba(124, 92, 255, 0.08) 100%);
          border: 1px solid var(--border-highlight);
        }

        .compare-hero-banner h1 {
          font-size: 32px;
          font-weight: 900;
          margin: 12px 0 8px;
        }

        .compare-hero-banner p {
          color: var(--text-muted);
          font-size: 15px;
          max-width: 700px;
          margin: 0 0 24px;
        }

        .compare-toggle-row {
          display: flex;
          gap: 12px;
        }

        .mode-switch {
          padding: 8px 16px !important;
          font-size: 13px !important;
          border-radius: var(--radius-pill) !important;
        }

        .mode-switch.active {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
        }

        /* Selectors */
        .compare-selectors-bar {
          padding: 20px 24px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 16px;
          flex-wrap: wrap;
        }

        .selector-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
          min-width: 220px;
        }

        .selector-group label {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-dim);
        }

        .model-select {
          height: 44px;
          padding: 0 14px;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-size: 14px;
          font-weight: 600;
          outline: none;
        }

        .model-select:focus {
          border-color: var(--accent-primary);
        }

        .selector-vs-badge {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--accent-gradient);
          color: white;
          font-weight: 900;
          font-size: 12px;
          display: grid;
          place-items: center;
          box-shadow: 0 4px 12px rgba(124, 92, 255, 0.4);
        }

        /* Table */
        .comparison-table-wrapper {
          border-radius: var(--radius-xl);
          overflow: hidden;
        }

        .compare-head-grid {
          display: grid;
          padding: 30px;
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-color);
          align-items: center;
          gap: 24px;
        }

        .compare-head-grid.two-way {
          grid-template-columns: 220px 1fr 1fr;
        }

        .compare-head-grid.three-way {
          grid-template-columns: 200px 1fr 1fr 1fr;
        }

        .spec-label-header h3 {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .spec-label-header small {
          color: var(--text-dim);
          font-size: 12px;
        }

        .compared-tool-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
          padding: 20px;
          border-radius: var(--radius-lg);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
        }

        .tool-hero-title h2 {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .rating-pill {
          font-size: 12px;
          color: var(--text-muted);
          font-weight: 600;
        }

        .star-icon {
          color: #f59e0b;
        }

        .compared-hero-actions {
          display: flex;
          gap: 8px;
          width: 100%;
        }

        .compared-hero-actions button,
        .compared-hero-actions a {
          flex: 1;
          padding: 9px !important;
          font-size: 12px !important;
        }

        /* Spec Rows */
        .compare-rows-container {
          display: flex;
          flex-direction: column;
        }

        .compare-spec-row {
          display: grid;
          padding: 16px 30px;
          border-bottom: 1px solid var(--border-color);
          font-size: 13.5px;
          align-items: center;
          gap: 24px;
        }

        .compare-spec-row:nth-child(even) {
          background: var(--bg-glass);
        }

        .compare-spec-row.two-way {
          grid-template-columns: 220px 1fr 1fr;
        }

        .compare-spec-row.three-way {
          grid-template-columns: 200px 1fr 1fr 1fr;
        }

        .spec-name-cell {
          color: var(--text-muted);
          font-weight: 700;
        }

        .spec-val-cell {
          color: var(--text-main);
        }

        .pros-cell ul, .cons-cell ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .check-green {
          color: #10b981;
          margin-right: 6px;
        }

        .cons-cell li {
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .compare-head-grid.two-way,
          .compare-spec-row.two-way {
            grid-template-columns: 140px 1fr 1fr;
            padding: 16px 14px;
            gap: 12px;
          }
          .compare-head-grid.three-way,
          .compare-spec-row.three-way {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default Compare;