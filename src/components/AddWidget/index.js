import React from "react";
import styles from "./styles.css";

const AddWidget = (props) => {
  const toggleVisible = () => {
    props.setIsVisible(true);
  };

  return (
    <div>
      <button
        data-test="component-addwidget"
        className="add-widget"
        onClick={toggleVisible}
      >
        Add Widget
      </button>
    </div>
  );
};

export default AddWidget;
