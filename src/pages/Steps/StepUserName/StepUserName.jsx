import React from "react";

const StepUserName = ({ onNext }) => {
  return (
    <>
      <h1>User Name Component</h1>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default StepUserName;
