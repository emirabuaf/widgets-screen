import React from "react";
const Step1 = (props) => {
  const { handleChange, nextStep } = props;
  return (
    <div>
      <p>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={props.name}
          onChange={handleChange}
        />
      </p>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};
export default Step1;
