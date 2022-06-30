import React, { useState } from "react";
import Button from "../../../../components/shared/Button/Button";
import Card from "../../../../components/shared/Card/Card";
import TextInput from "../../../../components/shared/TextInput/TextInput";
import styles from "../StepPhoneEmail.module.css";

const Email = ({ onNext }) => {
  const [email, stepEmail] = useState("");
  return (
    <div>
      <Card title="Enter your email id" icon="email">
        <TextInput value={email} onChange={(e) => stepEmail(e.target.value)} />
        <div>
          <div className={styles.actionButtonWrap}>
            <Button text="Next" onClick={onNext} />
          </div>
          <p className={styles.bottomPara}>
            By entering your number, you’re agreeing to our Terms of Service and
            Privacy Policy. Thanks!
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Email;
