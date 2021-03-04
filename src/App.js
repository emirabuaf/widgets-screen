import React, { useEffect, useState } from "react";
import "./App.css";
import Widgets from "./components/Widgets";
import MultiStepForm from "./components/MultiStepForm";

function App() {
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("newValue")) || []
  );
  const [isVisible, setIsVisible] = useState(false);

  const updateData = (value) => {
    formData.push(value);
    const newArray = [...formData];
    setFormData(newArray);
    localStorage.setItem("newValue", JSON.stringify(formData));
  };

  return (
    <div data-test="component-app" className="App">
      <Widgets
        data-test="component-widgets"
        setIsVisible={setIsVisible}
        formData={formData}
        setFormData={setFormData}
      />
      {isVisible == true ? (
        <MultiStepForm
          data-test="component-multistep"
          setIsVisible={setIsVisible}
          handleUpdate={updateData}
          formData={formData}
          setFormData={setFormData}
        />
      ) : null}
    </div>
  );
}

export default App;
