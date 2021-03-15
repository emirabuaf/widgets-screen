import React, { useEffect, useState } from "react";
import "./App.css";
import Widgets from "./components/Widgets";
import MultiStepForm from "./components/MultiStepForm";

export interface IData {
  name: string;
  language: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<IData []>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setFormData(JSON.parse(localStorage.getItem("newValue") || "[]" ))
  },[])

  const updateData = (value:IData) => {
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
          isVisible={isVisible}
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
