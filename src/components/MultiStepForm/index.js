import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import styles from "./styles.css";

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

  const handleSubmit = (key) => {
    const newValue = Object.values(inputValue);
    const convert = Object.assign({}, newValue);

    for (key in convert) {
      if (convert.hasOwnProperty(key)) {
        var value = convert[key];
        props.handleUpdate(value);
      }
    }
    props.setIsVisible(false);
  };

  const showStep = () => {
    if (currentStep === 1)
      return (
        <Step1
          nextStep={nextStep}
          handleChange={handleChange}
          language={inputValue.language}
        />
      );
    if (currentStep === 2)
      return (
        <Step2
          finishStep={handleSubmit}
          prevStep={prevStep}
          handleChange={handleChange}
          name={inputValue.name}
        />
      );
  };

  return <div className="wizard-container">{showStep()}</div>;
};

export default MultiStepForm;
