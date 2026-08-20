import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

function ReviewCard({
  name = "Sakshi",
  review = "Amazing AI tool! Very useful and easy to use.",
  rating = 5,
  avatar,
}) {
  return (
    <>
      <div className="review-card">
        <FaQuoteLeft className="quote" />

        <div className="review-user">
          <div className="review-avatar">
            {avatar ? <img src={avatar} /> : name[0]}
          </div>

          <div>
            <h4>{name}</h4>
            <div className="stars">
              {[...Array(rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>

        <p>"{review}"</p>
      </div>

      <style>{`
        .review-card {
          position: relative;
          padding: 25px;
          border-radius: 20px;
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,255,255,.08);
          color: white;
        }

        .quote {
          position: absolute;
          right: 22px;
          top: 22px;
          color: rgba(124,92,255,.2);
          font-size: 25px;
        }

        .review-user {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .review-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg,#7c5cff,#00cfff);
          display: grid;
          place-items: center;
          font-weight: bold;
        }

        .review-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: inherit;
        }

        .review-user h4 {
          margin: 0 0 5px;
        }

        .stars svg {
          color: #ffc107;
          font-size: 11px;
        }

        .review-card p {
          color: #8c96ad;
          font-size: 13px;
          line-height: 1.7;
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
}

export default ReviewCard;