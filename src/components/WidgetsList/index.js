import React, { useState } from "react";
import styles from "./styles.css";

const WidgetsList = (props) => {
  const [widgets, setWidgets] = useState(props.formData);

  const handleDeleteWidget = (index) => {
    widgets.splice(index, 1);
    const newList = widgets.filter((item) => item.index !== index);
    setWidgets(newList);
    console.log(widgets.length);
  };

  return (
    <div>
      {props.formData.map((widget, index) => (
        <div className="widget-wrapper" key={index}>
          <div>
            <p>Name:{widget.name}</p>
            <p>Language:{widget.language}</p>
          </div>
          <button
            className="delete-button"
            onClick={() => handleDeleteWidget(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default WidgetsList;
