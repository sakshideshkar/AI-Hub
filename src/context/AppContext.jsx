import React, { createContext, useContext, useState, useEffect } from "react";
import { AI_TOOLS } from "../data/aiToolsData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("aihub_theme") || "dark";
  });

  // Favorites state
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("aihub_favorites");
      return saved ? JSON.parse(saved) : ["chatgpt", "claude", "cursor", "midjourney"];
    } catch {
      return ["chatgpt", "claude", "cursor", "midjourney"];
    }
  });

  // User state
  const [user, setUser] = useState(() => {
    const isLogged = localStorage.getItem("isLoggedIn") === "true";
    return {
      isLoggedIn: isLogged,
      name: localStorage.getItem("userName") || "Sakshi Patel",
      email: localStorage.getItem("userEmail") || "sakshi@aihub.dev",
      avatar: localStorage.getItem("userAvatar") || "👩‍💻",
      bio: "AI researcher & full-stack developer exploring future frontier models.",
      plan: "AIHUB Pro Explorer",
      joined: "Jan 2025",
    };
  });

  // Recent activity
  const [recentActivity, setRecentActivity] = useState(() => {
    try {
      const saved = localStorage.getItem("aihub_activity");
      return saved ? JSON.parse(saved) : [
        { id: 1, type: "explore", toolName: "Claude 3.7 Sonnet", time: "10 mins ago", icon: "🧠", text: "Explored hybrid reasoning benchmarks" },
        { id: 2, type: "compare", toolName: "ChatGPT vs Gemini", time: "2 hours ago", icon: "⚖️", text: "Compared 2M context vs DALL-E integration" },
        { id: 3, type: "favorite", toolName: "Cursor AI", time: "Yesterday", icon: "⭐", text: "Saved Cursor AI to favorite workspace tools" },
        { id: 4, type: "review", toolName: "DeepSeek R1", time: "2 days ago", icon: "💬", text: "Rated 5 stars for mathematical proofs" },
      ];
    } catch {
      return [];
    }
  });

  // Compare selection (holds 2 or 3 tool IDs)
  const [compareList, setCompareList] = useState(["chatgpt", "claude"]);

  // Modals state
  const [selectedToolForModal, setSelectedToolForModal] = useState(null);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toast notifications
  const [toasts, setToasts] = useState([]);

  // Sync theme to root
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("aihub_theme", theme);
  }, [theme]);

  // Sync favorites
  useEffect(() => {
    localStorage.setItem("aihub_favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Sync activities
  useEffect(() => {
    localStorage.setItem("aihub_activity", JSON.stringify(recentActivity));
  }, [recentActivity]);

  const showToast = (message, type = "success", duration = 3000) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, duration);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  const toggleFavorite = (toolId) => {
    const exists = favorites.includes(toolId);
    const tool = AI_TOOLS.find(t => t.id === toolId);
    const toolName = tool ? tool.name : "Tool";

    if (exists) {
      setFavorites(prev => prev.filter(id => id !== toolId));
      showToast(`Removed ${toolName} from favorites`, "info");
    } else {
      setFavorites(prev => [...prev, toolId]);
      showToast(`Added ${toolName} to your favorites! ⭐`, "success");
      addActivity({
        type: "favorite",
        toolName,
        icon: "❤️",
        text: `Added ${toolName} to your favorites`,
      });
    }
  };

  const isFavorite = (toolId) => {
    return favorites.includes(toolId);
  };

  const addActivity = ({ type, toolName, icon, text }) => {
    const newAct = {
      id: Date.now(),
      type,
      toolName,
      time: "Just now",
      icon: icon || "⚡",
      text: text || `Explored ${toolName}`,
    };
    setRecentActivity(prev => [newAct, ...prev.slice(0, 15)]);
  };

  const login = (email, name = "Sakshi Patel") => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userName", name);
    setUser({
      isLoggedIn: true,
      name,
      email,
      avatar: "👩‍💻",
      bio: "AI researcher & full-stack developer exploring future frontier models.",
      plan: "AIHUB Pro Explorer",
      joined: "Jan 2025",
    });
    showToast(`Welcome back, ${name}! 🚀`, "success");
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setUser(prev => ({ ...prev, isLoggedIn: false }));
    showToast("Logged out successfully.", "info");
  };

  const loginAsDemo = () => {
    login("demo@aihub.dev", "Demo Explorer");
  };

  const updateProfile = (updatedFields) => {
    setUser(prev => {
      const next = { ...prev, ...updatedFields };
      if (next.name) localStorage.setItem("userName", next.name);
      if (next.email) localStorage.setItem("userEmail", next.email);
      return next;
    });
    showToast("Profile settings saved successfully! ✨", "success");
  };

  const openToolModal = (tool) => {
    setSelectedToolForModal(tool);
    addActivity({
      type: "explore",
      toolName: tool.name,
      icon: "🔍",
      text: `Viewed specifications for ${tool.name}`,
    });
  };

  const closeToolModal = () => {
    setSelectedToolForModal(null);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        favorites,
        toggleFavorite,
        isFavorite,
        user,
        login,
        logout,
        loginAsDemo,
        updateProfile,
        recentActivity,
        addActivity,
        compareList,
        setCompareList,
        selectedToolForModal,
        openToolModal,
        closeToolModal,
        isAiAssistantOpen,
        setIsAiAssistantOpen,
        sidebarCollapsed,
        setSidebarCollapsed,
        mobileMenuOpen,
        setMobileMenuOpen,
        toasts,
        showToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
