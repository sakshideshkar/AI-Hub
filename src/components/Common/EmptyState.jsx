import React from "react";
import { FaSearch } from "react-icons/fa";

const EmptyState = ({
  icon = <FaSearch />,
  title = "No results found",
  message = "We couldn't find anything matching your search.",
  action,
}) => {
  return (
    <div className="common-empty-state">
      <div className="empty-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{message}</p>

      {action && (
        <div className="empty-action">
          {action}
        </div>
      )}
    </div>
  );
};

export default EmptyState;