import React from "react";
import { FaPlus, FaCommentAlt, FaTrash } from "react-icons/fa";

function ConversationList({ conversations = [], onSelect }) {
  return (
    <>
      <div className="conversation-list">
        <button className="new-conversation">
          <FaPlus /> New Conversation
        </button>

        <span className="history-title">RECENT</span>

        {conversations.length === 0 ? (
          <p className="empty">No conversations yet.</p>
        ) : (
          conversations.map((conversation, index) => (
            <div
              className="conversation"
              key={index}
              onClick={() => onSelect && onSelect(conversation)}
            >
              <FaCommentAlt />
              <span>{conversation}</span>
              <FaTrash className="delete" />
            </div>
          ))
        )}
      </div>

      <style>{`
        .conversation-list {
          width: 260px;
          padding: 18px;
          color: #aab3c7;
          background: #0c1222;
          min-height: 100%;
        }

        .new-conversation {
          width: 100%;
          height: 44px;
          border: 1px solid rgba(124,92,255,.4);
          border-radius: 12px;
          background: rgba(124,92,255,.1);
          color: white;
          cursor: pointer;
        }

        .history-title {
          display: block;
          font-size: 10px;
          color: #626d84;
          margin: 25px 8px 12px;
        }

        .conversation {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          margin: 5px 0;
          border-radius: 10px;
          cursor: pointer;
          font-size: 12px;
        }

        .conversation:hover {
          background: rgba(255,255,255,.05);
          color: white;
        }

        .conversation span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          flex: 1;
        }

        .conversation .delete {
          opacity: 0;
          font-size: 10px;
        }

        .conversation:hover .delete {
          opacity: 1;
        }

        .empty {
          font-size: 12px;
          color: #5e687e;
        }
      `}</style>
    </>
  );
}

export default ConversationList;