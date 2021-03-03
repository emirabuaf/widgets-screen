import React, { useState } from "react";
import styles from "./styles.css";

const WidgetsList = (props) => {
  return (
    <div>
      <h1>Widgets</h1>
      {props.formData.map((widget, index) => (
        <div className="widget-wrapper" key={index}>
          <div>
            <p>Name:{widget.name}</p>
            <p>Language:{widget.language}</p>
          </div>
          <button className="delete-button">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default WidgetsList;
