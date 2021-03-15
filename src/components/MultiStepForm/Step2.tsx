import React from "react";

interface Step2Props {
  finishStep:(e:any) => void;
  handleChange:(e: any) => void;
  value: string;
  error: boolean;
}

const Step2:React.FC<Step2Props> = (props:Step2Props) => {
  const { value, error, handleChange, finishStep } = props;

  return (
    <div className="step1-wrapper" data-test="component-name">
      <p>
        <label htmlFor="name">Name:</label>
        <input
          className="input"
          type="text"
          name="name"
          value={props.value}
          onChange={handleChange}
          data-testid="newInputValue"
        />
      </p>
      {error ? <p className="error-message">All fields are required!</p> : null}

      <button className="button" onClick={finishStep}>
        Finish
      </button>
    </div>
  );
};
export default Step2;
