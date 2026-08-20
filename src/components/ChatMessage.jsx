import React from "react";
import { FaRobot, FaUser } from "react-icons/fa";
import MessageActions from "../MessageActions/MessageActions";

function ChatMessage({ role = "assistant", message }) {
  const isUser = role === "user";

  return (
    <>
      <div className={`chat-message ${isUser ? "user" : "assistant"}`}>
        <div className="avatar">
          {isUser ? <FaUser /> : <FaRobot />}
        </div>

        <div className="message-body">
          <div className="message-name">
            {isUser ? "You" : "AIHUB Assistant"}
          </div>

          <div className="message-text">
            {message || "Hello! How can I help you today?"}
          </div>

          {!isUser && <MessageActions />}
        </div>
      </div>

      <style>{`
        .chat-message {
          display: flex;
          gap: 15px;
          max-width: 850px;
          margin: 25px auto;
          color: white;
        }

        .chat-message.user {
          flex-direction: row-reverse;
        }

        .avatar {
          min-width: 40px;
          height: 40px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg,#7c5cff,#00cfff);
        }

        .message-body {
          max-width: 75%;
        }

        .user .message-body {
          text-align: right;
        }

        .message-name {
          color: #7c5cff;
          font-size: 12px;
          font-weight: bold;
          margin-bottom: 7px;
        }

        .message-text {
          padding: 15px 18px;
          border-radius: 16px;
          background: rgba(255,255,255,.06);
          line-height: 1.7;
          font-size: 14px;
          white-space: pre-wrap;
        }

        .user .message-text {
          background: #7c5cff;
        }
      `}</style>
    </>
  );
}

export default ChatMessage;