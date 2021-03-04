import React, { useState } from "react";
import WidgetsList from "../WidgetsList";
import AddWidget from "../AddWidget";
import styles from "./styles.css";

const Widgets = (props) => {
  return (
    <div className="container">
      <h1 className="header">Widgets</h1>
      <WidgetsList setFormData={props.setFormData} formData={props.formData} />
      <AddWidget setIsVisible={props.setIsVisible} />
    </div>
  );
};

export default Widgets;
