import React, { useEffect, useState } from "react";
import "./App.css";
import Widgets from "./components/Widgets";
import MultiStepForm from "./components/MultiStepForm";

const dataList = [
  { name: "florian", language: "german" },
  { name: "emir", language: "english" },
];

function App() {
  const [formData, setFormData] = useState(dataList);
  const [isVisible, setIsVisible] = useState(false);

  console.log(isVisible);

  const updateData = (value) => {
    formData.push(value);
    const newArray = [...formData];
    setFormData(newArray);
  };

  return (
    <div className="App">
      <Widgets
        setIsVisible={setIsVisible}
        formData={formData}
        setFormData={setFormData}
      />
      {isVisible == true ? (
        <MultiStepForm
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
