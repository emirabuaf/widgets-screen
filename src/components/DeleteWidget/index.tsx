import React from "react";
import "./styles.css";

interface Props {
  onClick: () => void;
}

const DeleteWidget:React.FC<Props> = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick} type="button" className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default DeleteWidget;
