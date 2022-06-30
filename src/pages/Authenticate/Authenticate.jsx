import React, { useState } from "react";
import StepOtp from "../Steps/StepOtp/StepOtp";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};

const Authenticate = () => {
  const [step, stepStep] = useState(1);
  const Step = steps[step];
  function onNext() {
    stepStep(step + 1);
  }
  return (
    <div>
      <Step onNext={onNext} />
    </div>
  );
};

export default Authenticate;
