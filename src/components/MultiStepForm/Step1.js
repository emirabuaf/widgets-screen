import React from "react";
const Step1 = (props) => {
  const { value, error, handleChange, nextStep } = props;
  return (
    <div>
      <p>
        <label data-test="component-language" htmlFor="language">
          Language:
        </label>
        <select name="language" onChange={handleChange}>
          <option disabled selected value={props.value}>
            -- select an option --
          </option>
          <option value="German">German</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
        </select>
      </p>
      {error ? <p className="error-message">All fields are required</p> : null}

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
