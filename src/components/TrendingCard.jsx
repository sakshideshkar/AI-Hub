import React from "react";

function TrendingCard({ rank, name, category, growth }) {
  return (
    <div className="trending-card">

      <div className="trending-rank">
        #{rank}
      </div>

      <div className="trending-info">
        <div className="trending-icon">
          {name === "ChatGPT"
            ? "🤖"
            : name === "Gemini"
            ? "✨"
            : name === "Claude"
            ? "🧠"
            : name === "Midjourney"
            ? "🎨"
            : "💻"}
        </div>

        <div>
          <h3>{name}</h3>
          <p>{category}</p>
        </div>
      </div>

      <div className="trending-growth">
        <strong>{growth}</strong>
        <span>Growth</span>
      </div>

      <button className="trending-btn">
        Explore →
      </button>

    </div>
  );
}

export default TrendingCard;