import React, { useState } from "react";
import { FaTimes, FaStar, FaHeart, FaExternalLinkAlt, FaCheck, FaTimesCircle, FaShieldAlt, FaRocket, FaShareAlt } from "react-icons/fa";
import { useApp } from "../context/AppContext";
import AILogo from "./AILogos";

function ToolDetailModal() {
  const { selectedToolForModal, closeToolModal, toggleFavorite, isFavorite, showToast } = useApp();
  const [activeTab, setActiveTab] = useState("overview"); // 'overview' | 'specs' | 'reviews'
  const [userRating, setUserRating] = useState(5);
  const [reviewComment, setReviewComment] = useState("");
  const [localReviews, setLocalReviews] = useState([
    { author: "Arjun Verma", role: "AI Engineer", rating: 5, time: "2 days ago", comment: "Unbelievable reasoning speed and accuracy. Replaced multiple other tools in my daily workflow." },
    { author: "Elena Rostova", role: "Product Designer", rating: 5, time: "1 week ago", comment: "The multimodal understanding is unmatched. Saves me 10+ hours every week." },
  ]);

  if (!selectedToolForModal) return null;
  const tool = selectedToolForModal;
  const favorited = isFavorite(tool.id);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.origin + `/tools?search=${encodeURIComponent(tool.name)}`);
    showToast("Tool link copied to clipboard! 📋", "info");
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!reviewComment.trim()) return;
    const newRev = {
      author: "Sakshi Patel (You)",
      role: "AI Explorer",
      rating: userRating,
      time: "Just now",
      comment: reviewComment,
    };
    setLocalReviews([newRev, ...localReviews]);
    setReviewComment("");
    showToast("Thank you! Your review has been published! ⭐", "success");
  };

  return (
    <div className="modal-backdrop" onClick={closeToolModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header Banner */}
        <div className="modal-banner">
          <button className="modal-close-btn" onClick={closeToolModal} title="Close Modal">
            <FaTimes />
          </button>

          <div className="modal-header-content">
            <div className="modal-logo-wrapper">
              <AILogo name={tool.name} size={64} />
            </div>

            <div className="modal-title-area">
              <div className="title-row">
                <h2>{tool.name}</h2>
                {tool.verified && (
                  <span className="verified-pill" title="Verified AI Platform">
                    <FaShieldAlt /> Verified
                  </span>
                )}
                <span className={`badge-pricing ${(tool.pricingModel || "freemium").toLowerCase()}`}>
                  {tool.pricingModel}
                </span>
              </div>
              <p className="creator-text">by {tool.creator} • {tool.categoryLabel}</p>
              <div className="stats-pill-row">
                <span><FaStar className="star-icon" /> {tool.rating} ({tool.reviewsCount.toLocaleString()} reviews)</span>
                <span>👥 {tool.monthlyUsers} monthly users</span>
                <span>📈 {tool.growthRate} growth</span>
              </div>
            </div>
          </div>

          <div className="modal-actions-top">
            <button
              className={`fav-btn-modal ${favorited ? "active" : ""}`}
              onClick={() => toggleFavorite(tool.id)}
            >
              <FaHeart /> {favorited ? "Favorited" : "Add to Favorites"}
            </button>
            <button className="share-btn-modal" onClick={handleShare}>
              <FaShareAlt /> Share
            </button>
            <a
              href={tool.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary visit-btn-modal"
            >
              <FaRocket /> Launch Tool <FaExternalLinkAlt style={{ fontSize: "11px" }} />
            </a>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="modal-tabs">
          <button
            className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview & Features
          </button>
          <button
            className={`tab-btn ${activeTab === "specs" ? "active" : ""}`}
            onClick={() => setActiveTab("specs")}
          >
            Technical Specs & Pricing
          </button>
          <button
            className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Community Reviews ({localReviews.length})
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="modal-body">
          {activeTab === "overview" && (
            <div className="tab-content">
              <div className="overview-section">
                <h3>About {tool.name}</h3>
                <p className="long-desc">{tool.description}</p>
              </div>

              <div className="tags-cluster">
                {tool.tags.map((tag) => (
                  <span key={tag} className="tool-tag">#{tag}</span>
                ))}
              </div>

              <div className="pros-cons-grid">
                <div className="pros-box">
                  <h4><FaCheck className="check-icon" /> Key Strengths</h4>
                  <ul>
                    {tool.pros.map((pro, i) => (
                      <li key={i}>{pro}</li>
                    ))}
                  </ul>
                </div>

                <div className="cons-box">
                  <h4><FaTimesCircle className="cross-icon" /> Considerations</h4>
                  <ul>
                    {tool.cons.map((con, i) => (
                      <li key={i}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "specs" && (
            <div className="tab-content">
              <div className="specs-table">
                <div className="spec-row">
                  <span className="spec-key">Pricing Details</span>
                  <span className="spec-val highlight">{tool.priceText}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">Context Window</span>
                  <span className="spec-val">{tool.specs.contextWindow}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">API Availability</span>
                  <span className="spec-val">{tool.specs.apiAvailable}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">Image Generation</span>
                  <span className="spec-val">{tool.specs.imageGeneration}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">Voice Capabilities</span>
                  <span className="spec-val">{tool.specs.voiceMode}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">Coding Assistance</span>
                  <span className="spec-val">{tool.specs.codingSupport}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">Supported Platforms</span>
                  <span className="spec-val">{tool.specs.platforms}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">Free Tier Policy</span>
                  <span className="spec-val">{tool.specs.freeTier}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="tab-content">
              <form className="add-review-form" onSubmit={handleAddReview}>
                <h4>Write a Community Review</h4>
                <div className="rating-select-row">
                  <span>Your Rating:</span>
                  <div className="star-selector">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        className={star <= userRating ? "active" : ""}
                        onClick={() => setUserRating(star)}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <textarea
                  rows="3"
                  placeholder={`Share your thoughts on ${tool.name}...`}
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  required
                />

                <button type="submit" className="btn-primary submit-review-btn">
                  Publish Review
                </button>
              </form>

              <div className="reviews-list">
                {localReviews.map((rev, i) => (
                  <div key={i} className="review-item">
                    <div className="review-header">
                      <div>
                        <strong>{rev.author}</strong>
                        <span className="author-role">{rev.role}</span>
                      </div>
                      <div className="review-meta">
                        <span className="review-stars">{"★".repeat(rev.rating)}</span>
                        <span className="review-time">{rev.time}</span>
                      </div>
                    </div>
                    <p className="review-body">"{rev.comment}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .modal-banner {
          padding: 30px;
          background: linear-gradient(180deg, var(--bg-surface) 0%, rgba(124, 92, 255, 0.06) 100%);
          border-bottom: 1px solid var(--border-color);
          position: relative;
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: 0.2s;
        }

        .modal-close-btn:hover {
          color: #fff;
          background: #ef4444;
          border-color: #ef4444;
        }

        .modal-header-content {
          display: flex;
          gap: 20px;
          align-items: center;
          margin-bottom: 22px;
        }

        .modal-title-area {
          flex: 1;
        }

        .title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .title-row h2 {
          font-size: 26px;
          font-weight: 800;
          color: var(--text-main);
          margin: 0;
        }

        .verified-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 9px;
          border-radius: var(--radius-pill);
          background: rgba(6, 182, 212, 0.15);
          color: #06b6d4;
          font-size: 11px;
          font-weight: 700;
        }

        .creator-text {
          color: var(--text-muted);
          font-size: 13px;
          margin: 4px 0 10px;
        }

        .stats-pill-row {
          display: flex;
          gap: 16px;
          font-size: 13px;
          color: var(--text-dim);
          flex-wrap: wrap;
        }

        .star-icon {
          color: #f59e0b;
        }

        .modal-actions-top {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .fav-btn-modal, .share-btn-modal {
          padding: 10px 18px;
          border-radius: var(--radius-md);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          font-weight: 600;
          font-size: 13px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: 0.2s;
        }

        .fav-btn-modal.active {
          color: #ef4444;
          border-color: rgba(239, 68, 68, 0.4);
          background: rgba(239, 68, 68, 0.1);
        }

        .visit-btn-modal {
          margin-left: auto;
        }

        .modal-tabs {
          display: flex;
          border-bottom: 1px solid var(--border-color);
          background: var(--bg-main);
          padding: 0 30px;
          gap: 8px;
        }

        .tab-btn {
          padding: 14px 18px;
          color: var(--text-muted);
          font-weight: 600;
          font-size: 14px;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          transition: 0.2s;
        }

        .tab-btn:hover {
          color: var(--text-main);
        }

        .tab-btn.active {
          color: var(--accent-primary);
          border-bottom-color: var(--accent-primary);
        }

        .modal-body {
          padding: 28px 30px;
        }

        .long-desc {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 15px;
          margin-top: 8px;
        }

        .tags-cluster {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin: 20px 0;
        }

        .tool-tag {
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          background: var(--bg-glass-strong);
          color: var(--text-muted);
          font-size: 12px;
          font-weight: 600;
        }

        .pros-cons-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 20px;
        }

        .pros-box, .cons-box {
          padding: 20px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          background: var(--bg-glass);
        }

        .pros-box h4 {
          color: #10b981;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          margin-bottom: 12px;
        }

        .cons-box h4 {
          color: #f59e0b;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          margin-bottom: 12px;
        }

        .pros-box ul, .cons-box ul {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .pros-box li::before {
          content: "✓ ";
          color: #10b981;
          font-weight: bold;
        }

        .cons-box li::before {
          content: "• ";
          color: #f59e0b;
          font-weight: bold;
        }

        /* Specs table */
        .specs-table {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .spec-row {
          display: grid;
          grid-template-columns: 180px 1fr;
          padding: 12px 18px;
          border-bottom: 1px solid var(--border-color);
          font-size: 14px;
        }

        .spec-row:last-child {
          border-bottom: none;
        }

        .spec-key {
          color: var(--text-dim);
          font-weight: 600;
        }

        .spec-val {
          color: var(--text-main);
        }

        .spec-val.highlight {
          color: var(--accent-primary);
          font-weight: 700;
        }

        /* Reviews */
        .add-review-form {
          padding: 20px;
          border-radius: var(--radius-md);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          margin-bottom: 24px;
        }

        .add-review-form h4 {
          margin-bottom: 12px;
        }

        .rating-select-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          font-size: 14px;
        }

        .star-selector button {
          font-size: 20px;
          color: var(--text-dim);
          cursor: pointer;
          transition: 0.15s;
        }

        .star-selector button.active {
          color: #f59e0b;
        }

        .add-review-form textarea {
          width: 100%;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          color: var(--text-main);
          font-size: 14px;
          margin-bottom: 12px;
          outline: none;
        }

        .add-review-form textarea:focus {
          border-color: var(--accent-primary);
        }

        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .review-item {
          padding: 16px 18px;
          border-radius: var(--radius-md);
          background: var(--bg-glass);
          border: 1px solid var(--border-color);
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .author-role {
          display: block;
          font-size: 11px;
          color: var(--text-dim);
        }

        .review-stars {
          color: #f59e0b;
          margin-right: 8px;
        }

        .review-time {
          font-size: 12px;
          color: var(--text-dim);
        }

        .review-body {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 600px) {
          .modal-header-content {
            flex-direction: column;
            align-items: flex-start;
          }
          .modal-banner, .modal-body, .modal-tabs {
            padding: 20px 16px;
          }
          .pros-cons-grid {
            grid-template-columns: 1fr;
          }
          .spec-row {
            grid-template-columns: 1fr;
            gap: 4px;
          }
          .visit-btn-modal {
            margin-left: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default ToolDetailModal;
