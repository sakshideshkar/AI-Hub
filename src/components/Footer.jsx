import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRobot, FaHeart, FaGithub, FaTwitter, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { useApp } from "../context/AppContext";

function Footer() {
  const { showToast } = useApp();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast("🎉 Thanks for subscribing to AI-Hub Weekly Intelligence!", "success");
    setEmail("");
  };

  return (
    <footer className="footer-modern">
      <div className="footer-container">
        {/* Top Grid */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <Link to="/dashboard" className="footer-logo">
              <div className="footer-logo-icon">
                <FaRobot />
              </div>
              <span>AI<span className="gradient-text">HUB</span></span>
            </Link>
            <p className="footer-tagline">
              Discover, compare, and benchmark 30+ leading artificial intelligence models, developer tools, creative suites, and productivity engines.
            </p>

            <div className="footer-social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>

          {/* Directory Links */}
          <div className="footer-col">
            <h4>Explore AI</h4>
            <Link to="/tools">All 30+ AI Tools</Link>
            <Link to="/categories">AI Categories</Link>
            <Link to="/compare">Side-by-Side Comparison</Link>
            <Link to="/trending">Hot Trending Leaderboard</Link>
            <Link to="/favorites">Saved Favorites</Link>
          </div>

          {/* Popular Categories */}
          <div className="footer-col">
            <h4>Top Categories</h4>
            <Link to="/tools?category=assistant">AI Assistants & LLMs</Link>
            <Link to="/tools?category=coding">Coding & IDE Tools</Link>
            <Link to="/tools?category=image">Image & Photorealism</Link>
            <Link to="/tools?category=video">Cinematic Video AI</Link>
            <Link to="/tools?category=audio">Voice & Studio Music</Link>
          </div>

          {/* Newsletter Box */}
          <div className="footer-col newsletter-col">
            <h4>AI-Hub Newsletter</h4>
            <p>Get weekly updates on new frontier models, open-source weights, and major AI releases.</p>
            <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary subscribe-btn">
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom-row">
          <p>© {new Date().getFullYear()} AI-HUB Platform. Built with high precision & state-of-the-art design.</p>
          <p className="made-with-love">
            Engineered with <FaHeart className="heart-pink" /> for AI creators & builders worldwide.
          </p>
        </div>
      </div>

      <style>{`
        .footer-modern {
          margin-top: 80px;
          border-top: 1px solid var(--border-color);
          background: var(--bg-surface);
          padding: 60px 24px 30px;
          color: var(--text-muted);
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 50px;
        }

        .footer-brand-col {
          max-width: 360px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          font-size: 24px;
          font-weight: 900;
          color: var(--text-main);
          margin-bottom: 16px;
        }

        .footer-logo-icon {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: var(--accent-gradient);
          color: white;
          display: grid;
          place-items: center;
          font-size: 18px;
        }

        .footer-tagline {
          font-size: 13.5px;
          line-height: 1.7;
          color: var(--text-dim);
          margin-bottom: 20px;
        }

        .footer-social-links {
          display: flex;
          gap: 10px;
        }

        .footer-social-links a {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          display: grid;
          place-items: center;
          transition: 0.2s;
        }

        .footer-social-links a:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .footer-col h4 {
          font-size: 15px;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 18px;
        }

        .footer-col a {
          display: block;
          font-size: 13.5px;
          color: var(--text-dim);
          margin-bottom: 10px;
          transition: 0.2s;
        }

        .footer-col a:hover {
          color: var(--accent-primary);
          transform: translateX(3px);
        }

        .newsletter-col p {
          font-size: 13px;
          color: var(--text-dim);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .footer-newsletter-form {
          display: flex;
          gap: 8px;
        }

        .footer-newsletter-form input {
          flex: 1;
          background: var(--bg-main);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 10px 14px;
          color: var(--text-main);
          font-size: 13px;
          outline: none;
        }

        .footer-newsletter-form input:focus {
          border-color: var(--accent-primary);
        }

        .subscribe-btn {
          width: 44px;
          height: 44px;
          padding: 0 !important;
          border-radius: var(--radius-md) !important;
        }

        .footer-bottom-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          border-top: 1px solid var(--border-color);
          font-size: 12.5px;
          color: var(--text-dim);
          flex-wrap: wrap;
          gap: 12px;
        }

        .heart-pink {
          color: #ec4899;
          vertical-align: middle;
          margin: 0 3px;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .footer-bottom-row {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;