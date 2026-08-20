import React, { useState, useRef, useEffect } from "react";
import { FaTimes, FaRobot, FaPaperPlane, FaMagic, FaLightbulb, FaExternalLinkAlt } from "react-icons/fa";
import { useApp } from "../context/AppContext";
import { AI_TOOLS } from "../data/aiToolsData";
import AILogo from "./AILogos";

function AiAssistantModal() {
  const { isAiAssistantOpen, setIsAiAssistantOpen, openToolModal } = useApp();
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "👋 Hi! I'm your AI-Hub Matchmaker. Tell me what task you're trying to accomplish (e.g. *'I need the best coding assistant'* or *'Free tool for image generation'*) and I'll find the perfect AI tool for you!",
      tools: ["claude", "cursor", "midjourney"],
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  useEffect(() => {
    if (isAiAssistantOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isAiAssistantOpen, isTyping]);

  if (!isAiAssistantOpen) return null;

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputVal;
    if (!query.trim()) return;

    const userMsg = { role: "user", text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    setTimeout(() => {
      const q = query.toLowerCase();
      let replyText = "";
      let matchedToolIds = [];

      if (q.includes("code") || q.includes("program") || q.includes("developer") || q.includes("python") || q.includes("react")) {
        replyText = "For software engineering and programming, **Claude 3.7 Sonnet** and **Cursor AI** are currently leading the industry. Claude 3.7 excels at complex architectural reasoning, while Cursor offers full codebase indexing and multi-file editing (Composer). If you want instant UI generation, checkout **v0 by Vercel**!";
        matchedToolIds = ["claude", "cursor", "v0", "copilot"];
      } else if (q.includes("image") || q.includes("art") || q.includes("photo") || q.includes("logo") || q.includes("draw")) {
        replyText = "For high-end image synthesis, **Midjourney v6** provides unmatched artistic photorealism. If you need crisp text inside images or open-weights, **Flux 1.1 Pro** is state-of-the-art. For conversational prompt adherence, **DALL-E 3** inside ChatGPT is great.";
        matchedToolIds = ["midjourney", "flux", "dalle"];
      } else if (q.includes("video") || q.includes("animation") || q.includes("movie") || q.includes("clip")) {
        replyText = "For AI video generation, **Runway Gen-3 Alpha** provides cinematic camera controls and director modes. **Luma Dream Machine** is exceptionally fast with 30 free generations per month.";
        matchedToolIds = ["runway", "luma"];
      } else if (q.includes("voice") || q.includes("audio") || q.includes("music") || q.includes("song") || q.includes("speech")) {
        replyText = "For ultra-realistic human voice cloning and text-to-speech, **ElevenLabs** is the clear leader. If you're looking to generate full studio-quality music tracks with singing, **Suno AI v4** is incredible!";
        matchedToolIds = ["elevenlabs", "suno"];
      } else if (q.includes("free") || q.includes("cheap") || q.includes("open source")) {
        replyText = "Here are the top high-performing free/open-weight AI platforms: **DeepSeek R1** (100% free reasoning online), **Google Gemini** (free 2.0 Flash access with 1M context), and **Windsurf by Codeium** (free individual tier for devs).";
        matchedToolIds = ["deepseek", "gemini", "codeium"];
      } else if (q.includes("research") || q.includes("science") || q.includes("paper") || q.includes("search")) {
        replyText = "For scientific inquiry and literature reviews, **Consensus AI** searches 200M+ peer-reviewed papers with expert agreement scoring. For general search with live web citations, **Perplexity AI** is the best.";
        matchedToolIds = ["consensus", "perplexity", "julius"];
      } else {
        replyText = `Based on your request, I recommend exploring our top-ranked general purpose assistants: **ChatGPT** (versatile all-rounder with voice & DALL-E), **Claude 3.7** (deep reasoning & coding), and **Google Gemini** (massive 2M context).`;
        matchedToolIds = ["chatgpt", "claude", "gemini"];
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: replyText,
          tools: matchedToolIds,
        },
      ]);
      setIsTyping(false);
    }, 700);
  };

  const samplePrompts = [
    "Best AI for coding full-stack apps?",
    "Free tools for realistic image generation",
    "How to generate full music tracks?",
    "Best search engine with citations",
  ];

  return (
    <div className="modal-backdrop" onClick={() => setIsAiAssistantOpen(false)}>
      <div className="modal-container ai-assistant-modal" onClick={(e) => e.stopPropagation()}>
        {/* Assistant Header */}
        <div className="assistant-header">
          <div className="assistant-brand">
            <div className="assistant-avatar">
              <FaRobot />
            </div>
            <div>
              <h3>AI-Hub Matchmaker</h3>
              <p>Instant tool recommendations powered by intelligent matching</p>
            </div>
          </div>

          <button className="modal-close-btn" onClick={() => setIsAiAssistantOpen(false)}>
            <FaTimes />
          </button>
        </div>

        {/* Chat History */}
        <div className="assistant-chat-body">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-bubble-wrap ${msg.role}`}>
              {msg.role === "assistant" && (
                <div className="bubble-avatar">
                  <FaRobot />
                </div>
              )}
              <div className="bubble-content">
                <div className="bubble-text">{msg.text}</div>

                {msg.tools && msg.tools.length > 0 && (
                  <div className="suggested-tools-strip">
                    <span className="strip-title"><FaLightbulb /> Recommended Tools:</span>
                    <div className="tools-mini-grid">
                      {msg.tools.map((id) => {
                        const t = AI_TOOLS.find((item) => item.id === id);
                        if (!t) return null;
                        return (
                          <div
                            key={t.id}
                            className="tool-mini-card"
                            onClick={() => {
                              setIsAiAssistantOpen(false);
                              openToolModal(t);
                            }}
                          >
                            <AILogo name={t.name} size={28} />
                            <div className="mini-info">
                              <strong>{t.name}</strong>
                              <small>{t.categoryLabel}</small>
                            </div>
                            <span className="mini-arrow">→</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="chat-bubble-wrap assistant">
              <div className="bubble-avatar"><FaRobot /></div>
              <div className="typing-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
          <div ref={chatBottomRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="sample-prompts-bar">
          {samplePrompts.map((prompt, i) => (
            <button key={i} className="prompt-chip" onClick={() => handleSendMessage(prompt)}>
              <FaMagic /> {prompt}
            </button>
          ))}
        </div>

        {/* Chat Input Bar */}
        <form
          className="assistant-input-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
        >
          <input
            type="text"
            placeholder="Ask AI-Hub: 'Which tool is best for...'"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button type="submit" className="btn-primary send-msg-btn">
            <FaPaperPlane />
          </button>
        </form>
      </div>

      <style>{`
        .ai-assistant-modal {
          max-width: 680px;
          display: flex;
          flex-direction: column;
          height: 600px;
          max-height: 85vh;
        }

        .assistant-header {
          padding: 18px 24px;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-surface);
        }

        .assistant-brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .assistant-avatar {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--accent-gradient);
          color: white;
          display: grid;
          place-items: center;
          font-size: 20px;
          box-shadow: 0 5px 15px rgba(124, 92, 255, 0.4);
        }

        .assistant-brand h3 {
          font-size: 17px;
          margin: 0;
        }

        .assistant-brand p {
          font-size: 12px;
          color: var(--text-dim);
          margin: 2px 0 0;
        }

        .assistant-chat-body {
          flex: 1;
          overflow-y: auto;
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          background: var(--bg-main);
        }

        .chat-bubble-wrap {
          display: flex;
          gap: 12px;
          max-width: 85%;
        }

        .chat-bubble-wrap.user {
          margin-left: auto;
          flex-direction: row-reverse;
        }

        .bubble-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--accent-primary);
          color: white;
          display: grid;
          place-items: center;
          font-size: 14px;
          flex-shrink: 0;
        }

        .bubble-content {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .bubble-text {
          padding: 12px 18px;
          border-radius: 18px;
          font-size: 14px;
          line-height: 1.6;
        }

        .assistant .bubble-text {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          border-top-left-radius: 4px;
        }

        .user .bubble-text {
          background: var(--accent-primary);
          color: #ffffff;
          border-top-right-radius: 4px;
        }

        .suggested-tools-strip {
          padding: 12px;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
        }

        .strip-title {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          color: var(--accent-primary);
          margin-bottom: 8px;
        }

        .tools-mini-grid {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .tool-mini-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          background: var(--bg-glass-strong);
          border: 1px solid transparent;
          cursor: pointer;
          transition: 0.2s;
        }

        .tool-mini-card:hover {
          border-color: var(--accent-primary);
          background: var(--border-color);
          transform: translateX(4px);
        }

        .mini-info {
          flex: 1;
        }

        .mini-info strong {
          font-size: 13px;
          display: block;
        }

        .mini-info small {
          font-size: 11px;
          color: var(--text-dim);
        }

        .mini-arrow {
          color: var(--accent-primary);
          font-weight: bold;
        }

        .typing-dots {
          display: flex;
          gap: 4px;
          padding: 14px 18px;
          background: var(--bg-card);
          border-radius: 18px;
          align-items: center;
        }

        .typing-dots span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-primary);
          animation: dotBounce 1.2s infinite ease-in-out;
        }

        .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
        .typing-dots span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes dotBounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }

        .sample-prompts-bar {
          display: flex;
          gap: 8px;
          padding: 10px 24px;
          overflow-x: auto;
          background: var(--bg-surface);
          border-top: 1px solid var(--border-color);
        }

        .prompt-chip {
          white-space: nowrap;
          font-size: 11px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: var(--radius-pill);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          cursor: pointer;
          transition: 0.2s;
        }

        .prompt-chip:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
        }

        .assistant-input-form {
          display: flex;
          gap: 10px;
          padding: 16px 24px;
          background: var(--bg-surface);
          border-top: 1px solid var(--border-color);
        }

        .assistant-input-form input {
          flex: 1;
          background: var(--bg-main);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-pill);
          padding: 12px 20px;
          color: var(--text-main);
          font-size: 14px;
          outline: none;
        }

        .assistant-input-form input:focus {
          border-color: var(--accent-primary);
        }

        .send-msg-btn {
          width: 44px;
          height: 44px;
          border-radius: 50% !important;
          padding: 0 !important;
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}

export default AiAssistantModal;
