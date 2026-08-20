import React from "react";

// Crisp SVG Logos and brand marks for top AI tools
export const AILogo = ({ name, size = 44, className = "" }) => {
  const norm = (name || "").toLowerCase();

  if (norm.includes("chatgpt") || norm.includes("gpt")) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
        <rect width="100" height="100" rx="22" fill="#10A37F" />
        <path
          d="M72.5 45.2c-.6-4.5-3.3-8.3-7.3-10.4-2.2-1.2-4.7-1.8-7.2-1.8-1.5 0-3 .2-4.4.7-1.3-3.6-3.9-6.6-7.4-8.3-4.2-2.1-9.1-2.2-13.4-.3-4.4 2-7.5 5.9-8.7 10.6-3.8 1.4-6.9 4.3-8.5 8.1-2.3 5.3-1.6 11.4 1.7 16.1-.6 4.5 2.1 9 5.8 11.7 2.6 1.9 5.8 2.9 9 2.9 1.4 0 2.8-.2 4.1-.7 1.3 3.6 3.9 6.6 7.4 8.3 4.2 2.1 9.1 2.2 13.4.3 4.4-2 7.5-5.9 8.7-10.6 3.8-1.4 6.9-4.3 8.5-8.1 2.3-5.3 1.6-11.4-1.7-16.1.6-1.5.8-2.9.7-4.3zm-19.7 34c-2.4 0-4.6-.9-6.3-2.6l1.7-2.9c1.2 1.2 2.8 1.9 4.6 1.9 3.6 0 6.6-3 6.6-6.6v-12.8l3.8 2.2v10.6c0 5.6-4.6 10.2-10.4 10.2zm-20.9-8.8c-1.5-2.1-2.1-4.7-1.7-7.3l3.2.9c-.3 1.9.1 3.8 1.2 5.3 2.1 3 6.2 3.8 9.2 1.7l11.1-6.4v4.4l-9.2 5.3c-4.8 2.8-11 1.2-13.8-3.9zm-7-22.3c.9-2.4 2.7-4.3 5.1-5.3l1.4 3c-1.8.8-3.1 2.2-3.8 4-1.4 3.4.2 7.3 3.6 8.7l11.1 4.5-2.2 3.8-9.6-3.9c-4.9-2-7.5-7.6-5.6-12.8zm39.7-5.5l-11.1-6.4v-4.4l9.2-5.3c4.8-2.8 11-1.2 13.8 3.9 1.5 2.1 2.1 4.7 1.7 7.3l-3.2-.9c.3-1.9-.1-3.8-1.2-5.3-2.1-3-6.2-3.8-9.2-1.7zm13.6 20c-.9 2.4-2.7 4.3-5.1 5.3l-1.4-3c1.8-.8 3.1-2.2 3.8-4 1.4-3.4-.2-7.3-3.6-8.7l-11.1-4.5 2.2-3.8 9.6 3.9c4.9 2.1 7.5 7.6 5.6 12.8zm-26.6-7.3l-5.6-3.2 5.6-3.2 5.6 3.2-5.6 3.2z"
          fill="#fff"
        />
      </svg>
    );
  }

  if (norm.includes("gemini")) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
        <rect width="100" height="100" rx="22" fill="#1E1F2E" />
        <defs>
          <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4E8CFF" />
            <stop offset="50%" stopColor="#9B72CF" />
            <stop offset="100%" stopColor="#FA7298" />
          </linearGradient>
        </defs>
        <path
          d="M50 16C50 34.778 34.778 50 16 50C34.778 50 50 65.222 50 84C50 65.222 65.222 50 84 50C65.222 50 50 34.778 50 16Z"
          fill="url(#geminiGrad)"
        />
      </svg>
    );
  }

  if (norm.includes("claude")) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
        <rect width="100" height="100" rx="22" fill="#D97757" />
        <path
          d="M50 22C34.536 22 22 34.536 22 50C22 65.464 34.536 78 50 78C65.464 78 78 65.464 78 50C78 34.536 65.464 22 50 22ZM50 32C59.941 32 68 40.059 68 50C68 59.941 59.941 68 50 68C40.059 68 32 59.941 32 50C32 40.059 40.059 32 50 32Z"
          fill="#FFF4E6"
        />
        <circle cx="50" cy="50" r="8" fill="#FFF4E6" />
      </svg>
    );
  }

  if (norm.includes("deepseek")) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
        <rect width="100" height="100" rx="22" fill="#0E1E38" />
        <path
          d="M26 35C26 27.268 32.268 21 40 21H60C67.732 21 74 27.268 74 35V65C74 72.732 67.732 79 60 79H40C32.268 79 26 72.732 26 65V35Z"
          stroke="#4D88FF"
          strokeWidth="6"
        />
        <path d="M40 42H60M40 58H54" stroke="#00D4FF" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  if (norm.includes("copilot") || norm.includes("github")) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
        <rect width="100" height="100" rx="22" fill="#0D1117" />
        <path
          d="M50 20C33.4 20 20 33.4 20 50C20 63.3 28.6 74.5 40.6 78.5C42.1 78.8 42.6 77.9 42.6 77.1C42.6 76.4 42.6 74.5 42.6 72C34.2 73.8 32.5 68 32.5 68C31.1 64.5 29.2 63.6 29.2 63.6C26.5 61.7 29.4 61.8 29.4 61.8C32.4 62 34 64.9 34 64.9C36.7 69.5 41 68.2 42.7 67.4C43 65.4 43.8 64 44.7 63.2C38 62.4 31 59.8 31 48.2C31 44.9 32.2 42.2 34.1 40.1C33.8 39.3 32.8 36.2 34.4 32C34.4 32 36.9 31.2 42.6 35.1C45 34.4 47.5 34.1 50 34.1C52.5 34.1 55 34.4 57.4 35.1C63.1 31.2 65.6 32 65.6 32C67.2 36.2 66.2 39.3 65.9 40.1C67.8 42.2 69 44.9 69 48.2C69 59.8 62 62.4 55.2 63.2C56.3 64.1 57.3 65.9 57.3 68.7C57.3 72.7 57.3 75.9 57.3 76.9C57.3 77.7 57.8 78.7 59.4 78.3C71.4 74.3 80 63.2 80 50C80 33.4 66.6 20 50 20Z"
          fill="#58A6FF"
        />
      </svg>
    );
  }

  if (norm.includes("midjourney")) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
        <rect width="100" height="100" rx="22" fill="#0C101A" />
        <path
          d="M24 70L40 30L60 62L76 42"
          stroke="#00D2FF"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="76" cy="42" r="5" fill="#7C5CFF" />
        <circle cx="24" cy="70" r="5" fill="#FF4D8D" />
      </svg>
    );
  }

  if (norm.includes("cursor")) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
        <rect width="100" height="100" rx="22" fill="#18181B" />
        <path
          d="M32 25L68 50L48 54L64 75L54 80L38 59L25 68L32 25Z"
          fill="#A855F7"
          stroke="#C084FC"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (norm.includes("v0") || norm.includes("vercel")) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
        <rect width="100" height="100" rx="22" fill="#000000" />
        <path d="M50 22L78 72H22L50 22Z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (norm.includes("runway") || norm.includes("gen-3")) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
        <rect width="100" height="100" rx="22" fill="#141419" />
        <path
          d="M28 28H52C63 28 72 37 72 48C72 59 63 68 52 68H44L68 76"
          stroke="#00FF66"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path d="M28 28V72" stroke="#00FF66" strokeWidth="7" strokeLinecap="round" />
      </svg>
    );
  }

  if (norm.includes("elevenlabs")) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
        <rect width="100" height="100" rx="22" fill="#0F172A" />
        <rect x="36" y="24" width="8" height="52" rx="4" fill="#FFFFFF" />
        <rect x="56" y="24" width="8" height="52" rx="4" fill="#6366F1" />
      </svg>
    );
  }

  if (norm.includes("suno") || norm.includes("music") || norm.includes("udio")) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
        <rect width="100" height="100" rx="22" fill="#2E0854" />
        <path
          d="M30 65V35L70 25V55"
          stroke="#FF007A"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="26" cy="65" r="9" fill="#FF007A" />
        <circle cx="66" cy="55" r="9" fill="#00E5FF" />
      </svg>
    );
  }

  if (norm.includes("notion")) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
        <rect width="100" height="100" rx="22" fill="#FFFFFF" />
        <path
          d="M26 28L68 24L74 72L32 76L26 28Z"
          fill="#000000"
        />
        <path
          d="M38 38L60 36L44 64L62 62"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (norm.includes("perplexity")) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
        <rect width="100" height="100" rx="22" fill="#13343B" />
        <circle cx="50" cy="50" r="22" stroke="#22D3EE" strokeWidth="6" />
        <path d="M50 20V80M20 50H80" stroke="#22D3EE" strokeWidth="5" />
      </svg>
    );
  }

  if (norm.includes("flux") || norm.includes("stable") || norm.includes("dall-e") || norm.includes("leonardo")) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
        <rect width="100" height="100" rx="22" fill="#2D124D" />
        <defs>
          <linearGradient id="artGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <path
          d="M30 68L46 44L60 60L68 50L78 68H30Z"
          fill="url(#artGrad)"
        />
        <circle cx="42" cy="36" r="6" fill="#FBBF24" />
      </svg>
    );
  }

  // Generic AI Avatar
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.28,
        background: "linear-gradient(135deg, #6366f1, #06b6d4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: size * 0.45,
        fontWeight: "bold",
        boxShadow: "0 8px 20px rgba(99,102,241,0.3)",
      }}
      className={className}
    >
      {name ? name.substring(0, 2).toUpperCase() : "AI"}
    </div>
  );
};

export default AILogo;
