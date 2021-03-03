import React from "react";
const Step1 = (props) => {
  const { error, handleChange, nextStep } = props;
  return (
    <div>
      <p>
        <label htmlFor="language">Language:</label>
        <input
          type="text"
          name="language"
          value={props.language}
          onChange={handleChange}
        />
      </p>
      {error ? <p className="error-message">All fields are required</p> : null}

      <button className="button" onClick={nextStep}>
        Next
      </button>
    </div>
  );
};
export default Step1;
