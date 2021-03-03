import React from "react";
const Step2 = (props) => {
  const { error, handleChange, finishStep, prevStep } = props;
  return (
    <div className="step1-wrapper">
      <p>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={props.name}
          onChange={handleChange}
        />
      </p>
      {error ? <p>All field are required</p> : null}

      <button className="back-button" onClick={prevStep}>
        Back
      </button>
      <button className="button" onClick={finishStep}>
        Finish
      </button>
    </div>
  );
};
export default Step2;
