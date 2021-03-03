import React, { useState } from "react";
import "./App.css";
import Widgets from "./components/Widgets";
import MultiStepForm from "./components/MultiStepForm";

const dataList = [
  { name: "emir", language: "english" },
  { name: "florian", language: "german" },
];

function App() {
  const [formData, setFormData] = useState(dataList);

  console.log(formData);

  return (
    <div className="App">
      <Widgets formData={formData} setFormData={setFormData} />
      <MultiStepForm formData={formData} setFormData={setFormData} />
    </div>
  );
}

export default App;
