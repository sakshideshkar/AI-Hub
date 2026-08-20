import React, { useState } from "react";
import { FaPaperclip, FaMicrophone, FaPaperPlane } from "react-icons/fa";

function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const send = () => {
    if (!message.trim()) return;

    onSend && onSend(message);
    setMessage("");
  };

  return (
    <>
      <div className="chat-input">
        <button><FaPaperclip /></button>

        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
          placeholder="Message AIHUB..."
          rows="1"
        />

        <button><FaMicrophone /></button>

        <button className="send-btn" onClick={send}>
          <FaPaperPlane />
        </button>
      </div>

      <style>{`
        .chat-input {
          max-width: 850px;
          margin: auto;
          min-height: 60px;
          padding: 8px 10px;
          border-radius: 18px;
          background: #10172a;
          border: 1px solid rgba(255,255,255,.1);
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 15px 40px rgba(0,0,0,.25);
        }

        .chat-input textarea {
          flex: 1;
          resize: none;
          border: none;
          outline: none;
          background: transparent;
          color: white;
          font-family: inherit;
          padding: 12px;
        }

        .chat-input button {
          width: 40px;
          height: 40px;
          border: none;
          border-radius: 11px;
          background: transparent;
          color: #758097;
          cursor: pointer;
        }

        .chat-input button:hover {
          color: white;
        }

        .chat-input .send-btn {
          color: white;
          background: linear-gradient(135deg,#7c5cff,#00bfff);
        }
      `}</style>
    </>
  );
}

export default ChatInput;