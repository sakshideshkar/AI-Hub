import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaRobot,
  FaLayerGroup,
  FaFire,
  FaBalanceScale,
  FaHeart,
  FaUser,
  FaSignOutAlt,
  FaChevronLeft,
  FaChevronRight,
  FaMagic,
} from "react-icons/fa";
import { useApp } from "../context/AppContext";

function Sidebar() {
  const navigate = useNavigate();
  const {
    favorites,
    logout,
    setIsAiAssistantOpen,
    sidebarCollapsed,
    setSidebarCollapsed,
    mobileMenuOpen,
    setMobileMenuOpen,
  } = useApp();

  const menuItems = [
    {
      path: "/dashboard",
      icon: FaHome,
      title: "Dashboard",
      description: "Personal Overview",
    },
    {
      path: "/tools",
      icon: FaRobot,
      title: "AI Tools Directory",
      description: "30+ Frontier Models",
    },
    {
      path: "/categories",
      icon: FaLayerGroup,
      title: "Categories",
      description: "Explore 8 Sectors",
    },
    {
      path: "/compare",
      icon: FaBalanceScale,
      title: "Compare Tools",
      description: "Feature Matrix",
    },
    {
      path: "/trending",
      icon: FaFire,
      title: "Trending AI",
      description: "Leaderboard",
      badge: "HOT",
    },
    {
      path: "/favorites",
      icon: FaHeart,
      title: "Favorites",
      description: "Saved Collection",
      count: favorites.length,
    },
    {
      path: "/profile",
      icon: FaUser,
      title: "Profile & Settings",
      description: "Preferences",
    },
  ];

  const closeMobile = () => {
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    closeMobile();
    logout();
    navigate("/login");
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div className="sidebar-backdrop" onClick={closeMobile} />
      )}

      <aside
        className={`sidebar-container ${sidebarCollapsed ? "is-collapsed" : ""} ${
          mobileMenuOpen ? "mobile-open" : ""
        }`}
      >
        {/* Collapse Button (Desktop) */}
        <button
          type="button"
          className="desktop-collapse-btn"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          title={sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {sidebarCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>

        {/* AI Matchmaker Trigger Card */}
        <div className="sidebar-matchmaker-box">
          <button
            type="button"
            className="matchmaker-banner-btn"
            onClick={() => {
              closeMobile();
              setIsAiAssistantOpen(true);
            }}
          >
            <div className="sparkle-circle">
              <FaMagic />
            </div>
            {!sidebarCollapsed && (
              <div className="sparkle-text">
                <strong>Ask AI Matchmaker</strong>
                <small>Find ideal AI tools in seconds</small>
              </div>
            )}
          </button>
        </div>

        {/* Menu Navigation */}
        <div className="sidebar-nav-section">
          {!sidebarCollapsed && <span className="nav-group-label">PLATFORM NAVIGATION</span>}
          <nav className="nav-links-list">
            {menuItems.map(({ path, icon: Icon, title, description, badge, count }) => (
              <NavLink
                key={path}
                to={path}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `nav-item-link ${isActive ? "active-link" : ""}`
                }
                title={sidebarCollapsed ? title : ""}
              >
                <div className="nav-item-icon">
                  <Icon />
                </div>

                {!sidebarCollapsed && (
                  <div className="nav-item-body">
                    <span className="nav-item-title">{title}</span>
                    <span className="nav-item-desc">{description}</span>
                  </div>
                )}

                {!sidebarCollapsed && badge && (
                  <span className="badge-hot">{badge}</span>
                )}

                {!sidebarCollapsed && count !== undefined && count > 0 && (
                  <span className="badge-count">{count}</span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Pro Banner (when expanded) */}
        {!sidebarCollapsed && (
          <div className="sidebar-pro-widget glass-card">
            <div className="pro-widget-content">
              <span className="pro-pill">✨ PRO ACCESS</span>
              <h4>AI-Hub Pro</h4>
              <p>Get instant API benchmarks, side-by-side token estimators, & alerts.</p>
              <button
                type="button"
                className="btn-primary pro-upgrade-btn"
                onClick={() => alert("You already have full free access during AI-Hub Beta!")}
              >
                Active Beta Plan ✓
              </button>
            </div>
          </div>
        )}

        {/* System Online Status */}
        {!sidebarCollapsed && (
          <div className="system-status-indicator">
            <span className="pulse-dot"></span>
            <div>
              <strong>Frontier AI Live</strong>
              <small>All 32 models operational</small>
            </div>
          </div>
        )}

        {/* Sidebar Footer */}
        <div className="sidebar-bottom-bar">
          <button
            type="button"
            className="nav-item-link logout-btn"
            onClick={handleLogout}
            title={sidebarCollapsed ? "Sign Out" : ""}
          >
            <div className="nav-item-icon">
              <FaSignOutAlt />
            </div>
            {!sidebarCollapsed && <span className="nav-item-title">Sign Out</span>}
          </button>
        </div>
      </aside>

      <style>{`
        .sidebar-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          z-index: 1050;
        }

        .sidebar-container {
          position: fixed;
          top: 72px;
          left: 0;
          width: 260px;
          height: calc(100vh - 72px);
          background: var(--sidebar-bg);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          padding: 20px 14px;
          z-index: 1100;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
          overflow-x: hidden;
        }

        .sidebar-container.is-collapsed {
          width: 80px;
          padding: 20px 10px;
        }

        .desktop-collapse-btn {
          position: absolute;
          top: 14px;
          right: -14px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          display: grid;
          place-items: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transition: 0.2s;
        }

        .desktop-collapse-btn:hover {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
          transform: scale(1.1);
        }

        .sidebar-matchmaker-box {
          margin-bottom: 20px;
        }

        .matchmaker-banner-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: var(--radius-md);
          background: var(--accent-gradient);
          color: white;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(124, 92, 255, 0.35);
          transition: all 0.25s;
          text-align: left;
        }

        .matchmaker-banner-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(124, 92, 255, 0.5);
        }

        .sparkle-circle {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.2);
          display: grid;
          place-items: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .sparkle-text strong {
          display: block;
          font-size: 13px;
        }

        .sparkle-text small {
          font-size: 10.5px;
          opacity: 0.9;
        }

        .sidebar-nav-section {
          flex: 1;
        }

        .nav-group-label {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.2px;
          color: var(--text-dim);
          display: block;
          padding: 0 10px 8px;
        }

        .nav-links-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .nav-item-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: var(--radius-md);
          color: var(--text-muted);
          text-decoration: none;
          transition: all 0.2s;
          border: 1px solid transparent;
        }

        .nav-item-link:hover {
          background: var(--bg-glass-strong);
          color: var(--text-main);
          transform: translateX(3px);
        }

        .nav-item-link.active-link {
          background: var(--bg-card);
          border-color: var(--border-highlight);
          color: var(--accent-primary);
          font-weight: 700;
          box-shadow: 0 4px 15px rgba(124, 92, 255, 0.12);
        }

        .nav-item-icon {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          display: grid;
          place-items: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .active-link .nav-item-icon {
          background: var(--accent-gradient);
          color: #ffffff;
        }

        .nav-item-body {
          flex: 1;
          min-width: 0;
        }

        .nav-item-title {
          display: block;
          font-size: 13px;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .nav-item-desc {
          display: block;
          font-size: 10.5px;
          color: var(--text-dim);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .badge-hot {
          font-size: 9px;
          font-weight: 900;
          padding: 2px 6px;
          border-radius: var(--radius-pill);
          background: rgba(236, 72, 153, 0.15);
          color: #ec4899;
          border: 1px solid rgba(236, 72, 153, 0.3);
        }

        .badge-count {
          font-size: 10px;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: var(--radius-pill);
          background: var(--accent-primary);
          color: #ffffff;
        }

        .sidebar-pro-widget {
          padding: 16px;
          margin: 16px 0;
          border-radius: var(--radius-md);
          background: linear-gradient(145deg, var(--bg-surface) 0%, rgba(124, 92, 255, 0.08) 100%);
        }

        .pro-pill {
          font-size: 9px;
          font-weight: 800;
          color: var(--accent-primary);
          letter-spacing: 0.5px;
        }

        .pro-widget-content h4 {
          font-size: 14px;
          margin: 4px 0 6px;
        }

        .pro-widget-content p {
          font-size: 11px;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .pro-upgrade-btn {
          width: 100%;
          padding: 8px !important;
          font-size: 12px !important;
        }

        .system-status-indicator {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: var(--radius-md);
          background: var(--bg-glass);
          border: 1px solid var(--border-color);
          margin-bottom: 12px;
        }

        .pulse-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: pulseStatus 2s infinite;
        }

        @keyframes pulseStatus {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }

        .system-status-indicator strong {
          display: block;
          font-size: 11px;
        }

        .system-status-indicator small {
          font-size: 10px;
          color: var(--text-dim);
        }

        .sidebar-bottom-bar {
          border-top: 1px solid var(--border-color);
          padding-top: 10px;
        }

        .logout-btn {
          color: #ef4444;
          cursor: pointer;
        }

        .logout-btn:hover {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        @media (max-width: 992px) {
          .sidebar-container {
            transform: translateX(-100%);
            box-shadow: 20px 0 50px rgba(0, 0, 0, 0.5);
          }

          .sidebar-container.mobile-open {
            transform: translateX(0);
          }

          .desktop-collapse-btn {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default Sidebar;