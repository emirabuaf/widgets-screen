import React from "react";
const Step2 = (props) => {
  const { handleChange, finishStep, back } = props;
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
      <button onClick={back}>Back</button>
      <button onClick={finishStep}>Finish</button>
    </div>
  );
};
export default Step2;
