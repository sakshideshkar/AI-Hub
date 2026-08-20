import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AppProvider, useApp } from "./context/AppContext";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ToolDetailModal from "./components/ToolDetailModal";
import AiAssistantModal from "./components/AiAssistantModal";
import ToastStack from "./components/Toast";

// Pages
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import Tools from "./Pages/Tools";
import Categories from "./Pages/Categories";
import Trending from "./Pages/Trending";
import Favorites from "./Pages/Favorites";
import Compare from "./Pages/Compare";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";

// Protected Layout with Navigation & Sidebar
const ProtectedLayout = ({ children }) => {
  const { user, sidebarCollapsed, setIsAiAssistantOpen } = useApp();
  const location = useLocation();

  // Allow guest exploration or logged in access
  if (!user.isLoggedIn && location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/") {
    // If not logged in, redirect to login with fallback
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="app-layout">
      {/* Top Navbar */}
      <Navbar />

      <div className="main-wrapper">
        {/* Fixed / Collapsible Sidebar */}
        <Sidebar />

        {/* Dynamic Page Content */}
        <main className={`page-content ${sidebarCollapsed ? "collapsed" : ""}`}>
          {children}
        </main>
      </div>

      {/* Global Footer */}
      <Footer />

      {/* Floating AI Matchmaker FAB */}
      <button
        type="button"
        className="ai-assistant-fab"
        onClick={() => setIsAiAssistantOpen(true)}
        title="Ask AI-Hub Matchmaker"
      >
        <span className="fab-icon">✨</span>
        <span>Ask AI Matchmaker</span>
      </button>

      {/* Modals & Alerts */}
      <ToolDetailModal />
      <AiAssistantModal />
      <ToastStack />
    </div>
  );
};

function AppRoutes() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* App Workspace Pages */}
      <Route
        path="/dashboard"
        element={
          <ProtectedLayout>
            <Dashboard />
          </ProtectedLayout>
        }
      />
      <Route
        path="/tools"
        element={
          <ProtectedLayout>
            <Tools />
          </ProtectedLayout>
        }
      />
      <Route
        path="/categories"
        element={
          <ProtectedLayout>
            <Categories />
          </ProtectedLayout>
        }
      />
      <Route
        path="/compare"
        element={
          <ProtectedLayout>
            <Compare />
          </ProtectedLayout>
        }
      />
      <Route
        path="/trending"
        element={
          <ProtectedLayout>
            <Trending />
          </ProtectedLayout>
        }
      />
      <Route
        path="/favorites"
        element={
          <ProtectedLayout>
            <Favorites />
          </ProtectedLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedLayout>
            <Profile />
          </ProtectedLayout>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
        <ToastStack />
        <AiAssistantModal />
        <ToolDetailModal />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;