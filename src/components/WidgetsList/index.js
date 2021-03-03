import React, { useState } from "react";
import styles from "./styles.css";

const WidgetsList = (props) => {
  console.log(props.formData);

  return (
    <div>
      <h1>Widgets</h1>
      {props.formData.map((widget, index) => (
        <div key={widget.id}>
          <p>Name:{widget.name}</p>
          <p>Language:{widget.language}</p>
          <button>Delete Button</button>
        </div>
      ))}
    </div>
  );
};

export default WidgetsList;
