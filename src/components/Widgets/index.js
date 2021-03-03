import React, { useState } from "react";
import WidgetsList from "../WidgetsList";
import AddWidget from "../AddWidget";
import styles from "./styles.css";

const Widgets = (props) => {
  return (
    <div className="container">
      <WidgetsList formData={props.formData} />
      <AddWidget setIsVisible={props.setIsVisible} />
    </div>
  );
};

export default Widgets;
