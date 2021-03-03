import React from "react";
const Step1 = (props) => {
  const { handleChange, nextStep } = props;
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
      <button className="button" onClick={nextStep}>
        Next
      </button>
    </div>
  );
};
export default Step1;
