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

  return (
    <div className="App">
      <Widgets formData={formData} />
      <MultiStepForm />
    </div>
  );
}

export default App;
