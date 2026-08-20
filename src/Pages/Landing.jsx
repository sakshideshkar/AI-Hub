import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaRocket,
  FaSearch,
  FaMagic,
  FaStar,
  FaShieldAlt,
  FaArrowRight,
  FaFire,
  FaBalanceScale,
  FaBolt,
  FaCheckCircle,
} from "react-icons/fa";
import { AI_TOOLS, AI_CATEGORIES } from "../data/aiToolsData";
import { useApp } from "../context/AppContext";
import ToolCard from "../components/ToolCard";
import AILogo from "../components/AILogos";

function Landing() {
  const navigate = useNavigate();
  const { loginAsDemo, setIsAiAssistantOpen } = useApp();
  const [searchVal, setSearchVal] = useState("");

  const featuredTools = AI_TOOLS.filter((t) => t.featured).slice(0, 6);

  const handleHeroSearch = (e) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/tools?search=${encodeURIComponent(searchVal)}`);
    } else {
      navigate("/tools");
    }
  };

  const handleDemoAccess = () => {
    loginAsDemo();
    navigate("/dashboard");
  };

  return (
    <div className="landing-page-wrapper">
      {/* Top Floating Glass Header for Landing */}
      <header className="landing-nav glass-card">
        <div className="landing-nav-inner">
          <Link to="/" className="landing-brand">
            <div className="brand-icon-box">🤖</div>
            <span>AI<span className="gradient-text">HUB</span></span>
          </Link>

          <div className="landing-nav-links">
            <Link to="/tools">AI Directory</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/compare">Compare Matrix</Link>
            <Link to="/trending">Trending 🔥</Link>
          </div>

          <div className="landing-nav-ctas">
            <button type="button" className="btn-secondary demo-quick-btn" onClick={handleDemoAccess}>
              ⚡ 1-Click Demo Login
            </button>
            <Link to="/login" className="btn-primary">
              Sign In <FaArrowRight style={{ fontSize: "11px" }} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="landing-hero-section">
        <div className="hero-glow-blob blob-1"></div>
        <div className="hero-glow-blob blob-2"></div>

        <div className="hero-content">
          <div className="hero-badge badge-glow">
            <FaBolt /> Next-Gen AI Intelligence Platform
          </div>

          <h1 className="hero-title">
            Discover, Compare & Benchmark <br />
            <span className="gradient-text">Frontier AI Tools</span> in One Place.
          </h1>

          <p className="hero-subtitle">
            Explore 30+ verified AI models spanning conversational reasoning, full-stack coding, photorealistic image synthesis, voice cloning, and workflow automation.
          </p>

          {/* Interactive Search Bar */}
          <form className="hero-search-form glass-card" onSubmit={handleHeroSearch}>
            <FaSearch className="hero-search-icon" />
            <input
              type="text"
              placeholder="Search by use case (e.g. 'coding assistant', 'text-to-video', 'free reasoning')..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            />
            <button type="submit" className="btn-primary hero-search-submit">
              Explore Tools <FaArrowRight />
            </button>
          </form>

          {/* Floating Pill Highlights */}
          <div className="hero-pills-row">
            <span className="hero-pills-label">Trending Now:</span>
            {["Claude 3.7", "DeepSeek R1", "Cursor AI", "Midjourney v6", "ElevenLabs", "Suno v4"].map((toolName) => (
              <button
                key={toolName}
                type="button"
                className="hero-pill-btn"
                onClick={() => navigate(`/tools?search=${encodeURIComponent(toolName)}`)}
              >
                <AILogo name={toolName} size={18} />
                <span>{toolName}</span>
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <button type="button" className="btn-primary hero-main-cta" onClick={handleDemoAccess}>
              <FaRocket /> Launch Dashboard (1-Click Demo)
            </button>

            <button
              type="button"
              className="btn-secondary hero-matchmaker-cta"
              onClick={() => setIsAiAssistantOpen(true)}
            >
              <FaMagic /> Try AI Matchmaker
            </button>
          </div>
        </div>
      </section>

      {/* Live Platform Stats */}
      <section className="landing-stats-bar glass-card">
        <div className="stat-pill-item">
          <h2>32+</h2>
          <p>Frontier AI Tools</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-pill-item">
          <h2>800M+</h2>
          <p>Monthly Active Users</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-pill-item">
          <h2>8</h2>
          <p>Curated Categories</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-pill-item">
          <h2>100%</h2>
          <p>Verified Specs & Benchmarks</p>
        </div>
      </section>

      {/* Featured AI Tools Spotlight */}
      <section className="landing-section">
        <div className="section-head-center">
          <span className="badge-glow"><FaFire /> CURATED SELECTION</span>
          <h2>Featured AI Frontier Models</h2>
          <p>The highest rated and most adopted generative AI tools powering millions of workflows.</p>
        </div>

        <div className="tools-grid">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        <div className="section-footer-cta">
          <Link to="/tools" className="btn-primary view-all-tools-btn">
            View All 30+ AI Tools in Directory <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="landing-section categories-section">
        <div className="section-head-center">
          <span className="badge-glow">⚡ EXPLORE BY DOMAIN</span>
          <h2>Find the Right Tool for Your Workflow</h2>
          <p>Browse by specific creative, engineering, and research domains.</p>
        </div>

        <div className="landing-categories-grid">
          {AI_CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
            <div
              key={cat.id}
              className="landing-category-card glass-card"
              onClick={() => navigate(`/tools?category=${cat.id}`)}
            >
              <div className="cat-icon-badge">{cat.icon}</div>
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
              <span className="cat-count-link">
                {cat.count} Tools Available →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Teaser */}
      <section className="landing-section comparison-teaser-section">
        <div className="comparison-banner glass-card">
          <div className="comparison-banner-content">
            <span className="badge-glow"><FaBalanceScale /> SMART MATRIX</span>
            <h2>Compare AI Tools Side-by-Side</h2>
            <p>
              Unsure which model fits your budget and technical requirements? Compare context windows, API rates, coding scores, and image capabilities in real time.
            </p>
            <Link to="/compare" className="btn-primary">
              Open Comparison Matrix <FaArrowRight />
            </Link>
          </div>

          <div className="comparison-graphic">
            <div className="graphic-card card-a">
              <AILogo name="ChatGPT" size={40} />
              <strong>ChatGPT Plus</strong>
              <small>GPT-4o & Advanced Voice</small>
            </div>
            <div className="vs-badge">VS</div>
            <div className="graphic-card card-b">
              <AILogo name="Claude" size={40} />
              <strong>Claude 3.7</strong>
              <small>Hybrid Reasoning & Coding</small>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-bottom-row">
          <p>© {new Date().getFullYear()} AIHUB. The leading AI directory & comparison platform.</p>
          <div className="footer-simple-links">
            <Link to="/tools">Tools</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/compare">Compare</Link>
            <Link to="/login">Sign In</Link>
          </div>
        </div>
      </footer>

      <style>{`
        .landing-page-wrapper {
          min-height: 100vh;
          background-color: var(--bg-main);
          color: var(--text-main);
          position: relative;
          overflow-x: hidden;
        }

        /* Floating Nav */
        .landing-nav {
          position: sticky;
          top: 16px;
          margin: 0 auto;
          max-width: 1280px;
          padding: 12px 24px;
          z-index: 1000;
          border-radius: var(--radius-pill);
        }

        .landing-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .landing-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          font-size: 20px;
          font-weight: 900;
          color: var(--text-main);
        }

        .landing-brand .brand-icon-box {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          background: var(--accent-gradient);
          display: grid;
          place-items: center;
          font-size: 18px;
        }

        .landing-nav-links {
          display: flex;
          gap: 24px;
        }

        .landing-nav-links a {
          color: var(--text-muted);
          font-size: 14px;
          font-weight: 600;
          transition: 0.2s;
        }

        .landing-nav-links a:hover {
          color: var(--accent-primary);
        }

        .landing-nav-ctas {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .demo-quick-btn {
          padding: 9px 16px !important;
          font-size: 13px !important;
        }

        /* Hero */
        .landing-hero-section {
          position: relative;
          padding: 100px 24px 70px;
          display: flex;
          justify-content: center;
          text-align: center;
        }

        .hero-glow-blob {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.22;
          pointer-events: none;
          z-index: 1;
        }

        .blob-1 {
          background: #7c5cff;
          top: -100px;
          left: 10%;
        }

        .blob-2 {
          background: #00d4ff;
          top: 50px;
          right: 10%;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 920px;
          margin: 0 auto;
        }

        .hero-badge {
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: clamp(38px, 6vw, 68px);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin-bottom: 22px;
        }

        .hero-subtitle {
          font-size: clamp(16px, 2vw, 19px);
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 760px;
          margin: 0 auto 36px;
        }

        .hero-search-form {
          display: flex;
          align-items: center;
          max-width: 680px;
          margin: 0 auto 28px;
          padding: 8px 10px 8px 20px;
          border-radius: var(--radius-pill);
          border: 1px solid var(--border-highlight);
        }

        .hero-search-icon {
          color: var(--accent-primary);
          font-size: 18px;
          margin-right: 12px;
        }

        .hero-search-form input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-main);
          font-size: 15px;
        }

        .hero-search-submit {
          padding: 12px 24px !important;
          border-radius: var(--radius-pill) !important;
        }

        .hero-pills-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }

        .hero-pills-label {
          font-size: 12.5px;
          color: var(--text-dim);
          font-weight: 700;
        }

        .hero-pill-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .hero-pill-btn:hover {
          color: var(--text-main);
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-main-cta {
          padding: 15px 32px !important;
          font-size: 16px !important;
          border-radius: var(--radius-pill) !important;
        }

        .hero-matchmaker-cta {
          padding: 15px 28px !important;
          font-size: 15px !important;
          border-radius: var(--radius-pill) !important;
        }

        /* Stats Bar */
        .landing-stats-bar {
          max-width: 1100px;
          margin: -20px auto 80px;
          padding: 30px 40px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          border-radius: var(--radius-xl);
        }

        .stat-pill-item {
          text-align: center;
        }

        .stat-pill-item h2 {
          font-size: 34px;
          font-weight: 900;
          color: var(--accent-primary);
          margin-bottom: 4px;
        }

        .stat-pill-item p {
          font-size: 13px;
          color: var(--text-muted);
          font-weight: 600;
        }

        .stat-divider {
          width: 1px;
          height: 50px;
          background: var(--border-color);
        }

        /* Sections */
        .landing-section {
          max-width: 1280px;
          margin: 0 auto 100px;
          padding: 0 24px;
        }

        .section-head-center {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 50px;
        }

        .section-head-center h2 {
          font-size: 34px;
          font-weight: 800;
          margin: 12px 0 10px;
        }

        .section-head-center p {
          color: var(--text-muted);
          font-size: 15px;
        }

        .section-footer-cta {
          text-align: center;
          margin-top: 40px;
        }

        .view-all-tools-btn {
          padding: 14px 30px !important;
          border-radius: var(--radius-pill) !important;
        }

        /* Categories Grid */
        .landing-categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .landing-category-card {
          padding: 26px;
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
        }

        .landing-category-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent-primary);
        }

        .cat-icon-badge {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .landing-category-card h3 {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .landing-category-card p {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .cat-count-link {
          font-size: 12px;
          font-weight: 700;
          color: var(--accent-primary);
        }

        /* Comparison Teaser */
        .comparison-banner {
          padding: 50px;
          border-radius: var(--radius-xl);
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .comparison-banner-content h2 {
          font-size: 32px;
          font-weight: 900;
          margin: 14px 0 12px;
        }

        .comparison-banner-content p {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .comparison-graphic {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .graphic-card {
          padding: 24px;
          border-radius: var(--radius-lg);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          text-align: center;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .graphic-card strong {
          font-size: 15px;
        }

        .graphic-card small {
          font-size: 11px;
          color: var(--text-dim);
        }

        .vs-badge {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--accent-gradient);
          color: white;
          font-weight: 900;
          font-size: 13px;
          display: grid;
          place-items: center;
          box-shadow: 0 4px 15px rgba(124, 92, 255, 0.5);
        }

        /* Footer */
        .landing-footer {
          border-top: 1px solid var(--border-color);
          padding: 30px 24px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .landing-footer .footer-bottom-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-dim);
          font-size: 13px;
        }

        .footer-simple-links {
          display: flex;
          gap: 20px;
        }

        .footer-simple-links a {
          color: var(--text-muted);
          font-weight: 600;
        }

        .footer-simple-links a:hover {
          color: var(--accent-primary);
        }

        @media (max-width: 900px) {
          .landing-nav-links {
            display: none;
          }
          .comparison-banner {
            grid-template-columns: 1fr;
            padding: 30px 20px;
          }
          .landing-stats-bar {
            flex-direction: column;
            gap: 24px;
            padding: 24px;
          }
          .stat-divider {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Landing;