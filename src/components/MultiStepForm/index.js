import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";

const MultiStepForm = (props) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputValue, setInputValue] = useState({
    name: "",
    language: "",
  });

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValue((prevState) => ({
      inputValue: { ...prevState.inputValue, [name]: value },
    }));
  };

  const handleSubmit = () => {
    setInputValue((prevState) => ({
      inputValue: { name: "", language: "" },
    }));
    const newValue = Object.values(inputValue);
    props.formData.push(newValue);
    console.log(newValue);
  };

  const showStep = () => {
    if (currentStep === 1)
      return (
        <Step1
          nextStep={nextStep}
          handleChange={handleChange}
          name={inputValue.name}
        />
      );
    if (currentStep === 2)
      return (
        <Step2
          finishStep={handleSubmit}
          prevStep={prevStep}
          handleChange={handleChange}
          language={inputValue.language}
        />
      );
  };

  return <div>{showStep()}</div>;
};

export default MultiStepForm;
