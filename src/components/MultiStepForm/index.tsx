import React, {Dispatch, SetStateAction , useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import "./styles.css";
import FormModal from "./FormModal";
import { IData } from '../../App'

interface FormProps {
  isVisible: boolean;
  setIsVisible: any;
  formData?: IData[];
  setFormData?: Dispatch<SetStateAction<IData[]>>;
  handleUpdate: (e:any) => void;
}

const MultiStepForm:React.FC<FormProps> = (props:FormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputValue, setInputValue] = useState<any>({
    name: "",
    language: "",
  });
  const [error, setError] = useState(false);

  const nextStep = () => {
    if (inputValue.language !== "") {
      setCurrentStep(currentStep + 1);
      setError(false);
    } else {
      setError(true);
      setCurrentStep(currentStep);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prevState:any) => ({
      inputValue: { ...prevState.inputValue, [name]: value },
    }));
  };

  const handleSubmit = (key:any) => {
    const newValue = Object.values(inputValue);
    const newObject = Object.assign({}, newValue);

    for (key in newObject) {
      if (newObject.hasOwnProperty(key)) {
        var value:any = newObject[key];
        if (!value.name) {
          props.setIsVisible(true);
          setError(true);
        } else {
          props.setIsVisible(false);
          props.handleUpdate(value);
        }
      }
    }
  };

  const showStep = () => {
    if (currentStep === 1)
      return (
        <Step1
          data-test="component-step1"
          nextStep={nextStep}
          handleChange={handleChange}
          value={inputValue.name}
          error={error}
        />
      );
    if (currentStep === 2)
      return (
        <Step2
          data-test="component-step2"
          finishStep={handleSubmit}
          handleChange={handleChange}
          value={inputValue.language}
          error={error}
        />
      );
  };

  return (
    <div>
      <FormModal
        data-test="component-wizard"
        currentStep={currentStep}
        showSteps={showStep()}
        show={props.isVisible}
        onHide={() => props.setIsVisible(false)}
      />
    </div>
  );
};

export default MultiStepForm;
