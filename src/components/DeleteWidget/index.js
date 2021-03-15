import React, { useState } from "react";
import styles from "./styles.css";

const DeleteWidget = (props) => {
  return (
    <div>
      <button onClick={props.onClick} type="button" className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default DeleteWidget;
