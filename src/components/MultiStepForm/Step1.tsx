import React from "react";

interface Step1Props {
  nextStep:() => void;
  handleChange:(e: any) => void;
  value: string;
  error: boolean;
}

const Step1:React.FC<Step1Props> = (props:Step1Props) => {
  const { value, error, handleChange, nextStep } = props;
  return (
    <div>
      <p>
        <label data-test="component-language" htmlFor="language">
          Language:
        </label>
        <select
          className="select-dropdown"
          name="language"
          onChange={handleChange}
        >
          <option disabled selected value={props.value}>
            -- select an option --
          </option>
          <option value="German">German</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="Mandarin">Mandarin</option>
          <option value="Italian">Italian</option>
          <option value="Portuguese">Portuguese</option>
        </select>
      </p>
      {error ? <p className="error-message">All fields are required!</p> : null}

      <button
        data-test="component-next-button"
        className="button"
        onClick={nextStep}
      >
        Next
      </button>
    </div>
  );
};
export default Step1;
