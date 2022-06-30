import React, { useState } from "react";
import Email from "./Email/Email";
import Phone from "./Phone/Phone";
import styles from "./StepPhoneEmail.module.css";

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

const StepPhoneEmail = ({ onNext }) => {
  const [type, stepType] = useState("phone");
  const Component = phoneEmailMap[type];

  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
          <div className={styles.buttonWrap}>
            <button
              className={`${styles.tabButtons} ${
                type === "phone" ? styles.active : ""
              }`}
              onClick={() => stepType("phone")}
            >
              <img src="/images/mobile.png" alt="mobile" />
            </button>
            <button
              className={`${styles.tabButtons} ${
                type === "email" ? styles.active : ""
              }`}
              onClick={() => stepType("email")}
            >
              <img src="/images/mail.png" alt="mail" />
            </button>
          </div>
          <Component onNext={onNext} />
        </div>
      </div>
    </>
  );
};

export default StepPhoneEmail;
