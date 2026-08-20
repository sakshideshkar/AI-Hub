import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaRobot,
  FaSearch,
  FaHeart,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaUserCircle,
  FaMagic,
  FaSignOutAlt,
  FaCog,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useApp } from "../context/AppContext";
import { AI_TOOLS } from "../data/aiToolsData";
import AILogo from "./AILogos";

function Navbar() {
  const navigate = useNavigate();
  const {
    theme,
    toggleTheme,
    favorites,
    user,
    logout,
    setIsAiAssistantOpen,
    openToolModal,
    mobileMenuOpen,
    setMobileMenuOpen,
  } = useApp();

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const searchRef = useRef(null);
  const profileRef = useRef(null);

  // Filter tools for autocomplete search dropdown
  const matchingTools = searchQuery.trim()
    ? AI_TOOLS.filter((t) =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 5)
    : [];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectTool = (tool) => {
    setSearchQuery("");
    setIsSearchFocused(false);
    openToolModal(tool);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchFocused(false);
      navigate(`/tools?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="navbar-modern">
      <div className="nav-container">
        {/* Brand Logo */}
        <div className="nav-left">
          <button
            type="button"
            className="mobile-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <Link to="/dashboard" className="nav-brand">
            <div className="brand-icon-box">
              <FaRobot />
            </div>
            <span className="brand-text">
              AI<span className="gradient-text">HUB</span>
            </span>
          </Link>
        </div>

        {/* Global Live Search */}
        <div className="nav-search-area" ref={searchRef}>
          <form className="search-input-wrapper" onSubmit={handleSearchSubmit}>
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search 30+ AI tools (e.g., ChatGPT, Claude, Midjourney)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery("")}
              >
                <FaTimes />
              </button>
            )}
          </form>

          {/* Autocomplete Dropdown Results */}
          {isSearchFocused && matchingTools.length > 0 && (
            <div className="search-results-dropdown glass-card">
              <span className="dropdown-header-title">TOP MATCHING TOOLS</span>
              {matchingTools.map((tool) => (
                <div
                  key={tool.id}
                  className="search-item"
                  onClick={() => handleSelectTool(tool)}
                >
                  <AILogo name={tool.name} size={30} />
                  <div className="search-item-info">
                    <strong>{tool.name}</strong>
                    <small>{tool.categoryLabel} • {tool.pricingModel}</small>
                  </div>
                  <span className="search-arrow">View Spec →</span>
                </div>
              ))}
              <div
                className="search-view-all"
                onClick={() => {
                  setIsSearchFocused(false);
                  navigate(`/tools?search=${encodeURIComponent(searchQuery)}`);
                }}
              >
                See all results for "{searchQuery}" →
              </div>
            </div>
          )}
        </div>

        {/* Actions & Utilities */}
        <div className="nav-actions">
          {/* Ask AI Matchmaker Trigger */}
          <button
            type="button"
            className="ai-matchmaker-btn"
            onClick={() => setIsAiAssistantOpen(true)}
            title="Ask AI-Hub Matchmaker"
          >
            <FaMagic className="magic-spin" />
            <span>AI Matchmaker</span>
          </button>

          {/* Favorites Shortcut */}
          <Link
            to="/favorites"
            className="nav-icon-badge"
            title="Your Saved Favorites"
          >
            <FaHeart />
            {favorites.length > 0 && (
              <span className="fav-count-pill">{favorites.length}</span>
            )}
          </Link>

          {/* Dark / Light Mode Toggle */}
          <button
            type="button"
            className="nav-btn-icon"
            onClick={toggleTheme}
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? <FaSun className="sun-icon" /> : <FaMoon />}
          </button>

          {/* User Profile Avatar Dropdown */}
          <div className="profile-menu-wrapper" ref={profileRef}>
            <button
              type="button"
              className="profile-avatar-btn"
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            >
              <span className="user-avatar-badge">{user.avatar || "👩‍💻"}</span>
              <span className="user-name-text">{user.name?.split(" ")[0]}</span>
            </button>

            {profileDropdownOpen && (
              <div className="profile-popover glass-card">
                <div className="popover-user-head">
                  <div className="popover-avatar">{user.avatar || "👩‍💻"}</div>
                  <div>
                    <strong>{user.name}</strong>
                    <small>{user.email}</small>
                  </div>
                </div>

                <div className="popover-menu-links">
                  <Link
                    to="/profile"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="popover-link"
                  >
                    <FaUserCircle /> My Profile & Stats
                  </Link>
                  <Link
                    to="/favorites"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="popover-link"
                  >
                    <FaHeart /> Favorites Collection ({favorites.length})
                  </Link>
                  <Link
                    to="/compare"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="popover-link"
                  >
                    ⚖️ Tool Comparison Matrix
                  </Link>
                </div>

                <div className="popover-footer">
                  <button
                    type="button"
                    className="logout-popover-btn"
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      logout();
                      navigate("/login");
                    }}
                  >
                    <FaSignOutAlt /> Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .navbar-modern {
          height: 72px;
          position: sticky;
          top: 0;
          z-index: 1000;
          background: var(--navbar-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-color);
        }

        .nav-container {
          height: 100%;
          padding: 0 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          max-width: 1600px;
          margin: 0 auto;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .mobile-hamburger {
          display: none;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          font-size: 18px;
          cursor: pointer;
          place-items: center;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .brand-icon-box {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: var(--accent-gradient);
          color: white;
          display: grid;
          place-items: center;
          font-size: 20px;
          box-shadow: 0 8px 20px rgba(124, 92, 255, 0.4);
        }

        .brand-text {
          font-size: 22px;
          font-weight: 900;
          letter-spacing: -0.5px;
          color: var(--text-main);
        }

        .nav-search-area {
          flex: 1;
          max-width: 540px;
          position: relative;
        }

        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          height: 44px;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-pill);
          padding: 0 16px;
          transition: all 0.25s ease;
        }

        .search-input-wrapper:focus-within {
          border-color: var(--accent-primary);
          box-shadow: 0 0 25px rgba(124, 92, 255, 0.25);
        }

        .search-icon {
          color: var(--accent-primary);
          margin-right: 12px;
          font-size: 14px;
        }

        .search-input-wrapper input {
          flex: 1;
          border: none;
          background: transparent;
          color: var(--text-main);
          font-size: 13.5px;
          outline: none;
        }

        .search-input-wrapper input::placeholder {
          color: var(--text-dim);
        }

        .clear-search-btn {
          color: var(--text-dim);
          cursor: pointer;
        }

        .search-results-dropdown {
          position: absolute;
          top: 52px;
          left: 0;
          width: 100%;
          padding: 12px;
          border-radius: var(--radius-lg);
          background: var(--bg-surface);
          border: 1px solid var(--border-highlight);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
          z-index: 100;
        }

        .dropdown-header-title {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          color: var(--text-dim);
          display: block;
          padding: 4px 10px 8px;
        }

        .search-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: 0.2s;
        }

        .search-item:hover {
          background: var(--bg-glass-strong);
          transform: translateX(4px);
        }

        .search-item-info {
          flex: 1;
        }

        .search-item-info strong {
          display: block;
          font-size: 13px;
          color: var(--text-main);
        }

        .search-item-info small {
          color: var(--text-dim);
          font-size: 11px;
        }

        .search-arrow {
          font-size: 12px;
          color: var(--accent-primary);
          font-weight: 700;
        }

        .search-view-all {
          text-align: center;
          padding: 10px;
          font-size: 12px;
          font-weight: 700;
          color: var(--accent-primary);
          border-top: 1px solid var(--border-color);
          margin-top: 6px;
          cursor: pointer;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ai-matchmaker-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: var(--radius-pill);
          background: rgba(124, 92, 255, 0.14);
          border: 1px solid rgba(124, 92, 255, 0.35);
          color: var(--accent-primary);
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.25s;
        }

        .ai-matchmaker-btn:hover {
          background: var(--accent-gradient);
          color: white;
          box-shadow: 0 5px 20px rgba(124, 92, 255, 0.4);
          transform: translateY(-2px);
        }

        .magic-spin {
          font-size: 14px;
        }

        .nav-icon-badge, .nav-btn-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          display: grid;
          place-items: center;
          position: relative;
          cursor: pointer;
          transition: 0.2s;
          font-size: 16px;
        }

        .nav-icon-badge:hover, .nav-btn-icon:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
          background: var(--bg-glass-strong);
        }

        .fav-count-pill {
          position: absolute;
          top: -4px;
          right: -4px;
          background: #ef4444;
          color: white;
          font-size: 10px;
          font-weight: 800;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          box-shadow: 0 2px 8px rgba(239, 68, 68, 0.5);
        }

        .sun-icon {
          color: #f59e0b;
        }

        .profile-menu-wrapper {
          position: relative;
        }

        .profile-avatar-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 4px 12px 4px 6px;
          border-radius: var(--radius-pill);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          cursor: pointer;
          transition: 0.2s;
        }

        .profile-avatar-btn:hover {
          border-color: var(--accent-primary);
        }

        .user-avatar-badge {
          font-size: 18px;
        }

        .user-name-text {
          font-weight: 700;
          font-size: 13px;
        }

        .profile-popover {
          position: absolute;
          top: 50px;
          right: 0;
          width: 260px;
          padding: 14px;
          border-radius: var(--radius-lg);
          background: var(--bg-surface);
          border: 1px solid var(--border-highlight);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          z-index: 200;
          animation: popoverFade 0.2s ease-out;
        }

        @keyframes popoverFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .popover-user-head {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 10px;
        }

        .popover-avatar {
          font-size: 26px;
        }

        .popover-user-head strong {
          display: block;
          font-size: 14px;
        }

        .popover-user-head small {
          font-size: 11px;
          color: var(--text-dim);
        }

        .popover-menu-links {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .popover-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: var(--radius-sm);
          font-size: 13px;
          font-weight: 600;
          color: var(--text-muted);
          transition: 0.2s;
        }

        .popover-link:hover {
          background: var(--bg-glass-strong);
          color: var(--accent-primary);
        }

        .popover-footer {
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px solid var(--border-color);
        }

        .logout-popover-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          border-radius: var(--radius-sm);
          color: #ef4444;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          transition: 0.2s;
        }

        .logout-popover-btn:hover {
          background: rgba(239, 68, 68, 0.1);
        }

        @media (max-width: 992px) {
          .mobile-hamburger {
            display: grid;
          }
          .nav-search-area {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .ai-matchmaker-btn span {
            display: none;
          }
          .user-name-text {
            display: none;
          }
          .nav-container {
            padding: 0 16px;
          }
        }
      `}</style>
    </header>
  );
}

export default Navbar;